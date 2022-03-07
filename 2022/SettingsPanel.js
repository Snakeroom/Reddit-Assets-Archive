// https://www.redditstatic.com/desktop2x/SettingsPanel.7202767c5e8496155f68.js
// Retrieved at 3/7/2022, 10:10:04 AM by Reddit Dataminer v1.0.0
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
				r = a("./node_modules/react-redux/es/index.js"),
				l = a("./src/chat/actions/channel/dropdown.ts"),
				o = a("./src/chat/actions/settings/index.ts"),
				i = a("./src/chat/actions/tracking.ts"),
				u = a("./src/chat/components/Modals/BlockUser/index.tsx"),
				h = a("./src/chat/actions/channel/hide.ts"),
				m = a("./src/chat/components/Modals/ModalOverlay/index.tsx");
			const {
				fbt: d
			} = a("./node_modules/fbt/lib/FbtPublic.js");
			var b = ({
					userToLeave: e
				}) => {
					const t = Object(r.d)();
					return s.a.createElement(m.c, {
						submit: () => {
							t(Object(h.a)()), t(Object(i.H)())
						},
						submitButtonText: d._("Yes, Leave", null, {
							hk: "4aBFrU"
						})
					}, s.a.createElement(m.b, null, d._("Leave chat?", null, {
						hk: "1BniWn"
					})), s.a.createElement(m.a, null, d._("This conversation will be hidden but you won't lose your chat history, so you can continue chatting with {userName}{=at any time.}", [d._param("userName", `u/${e.name}`), d._param("=at any time.", s.a.createElement("span", null, d._("at any time.", null, {
						hk: "2mWUkR"
					})))], {
						hk: "12UAIN"
					})))
				},
				p = a("./src/chat/actions/channel.ts"),
				v = a("./src/chat/selectors/channels.ts");
			const {
				fbt: _
			} = a("./node_modules/fbt/lib/FbtPublic.js");
			var A = () => {
					const e = Object(r.d)(),
						t = Object(r.e)(v.n);
					return s.a.createElement(m.c, {
						submit: () => {
							t && e(Object(p.G)(t)), e(Object(i.H)())
						},
						submitButtonText: _._("Yes, Leave", null, {
							hk: "1lG6hO"
						})
					}, s.a.createElement(m.b, null, _._("Leave group?", null, {
						hk: "4qlYAa"
					})), s.a.createElement(m.a, null, _._("Once you leave, you won't get new messages and will need another invite to rejoin.", null, {
						hk: "1fBcJy"
					})))
				},
				x = a("./src/lib/makeGqlRequest/index.ts"),
				k = a("./src/redditGQL/operations/UpdateChatMessagesAsRead.json");
			var E = a("./src/reddit/hooks/useGqlContext.ts");
			const {
				fbt: S
			} = a("./node_modules/fbt/lib/FbtPublic.js");
			var f = () => {
					const e = Object(E.a)();
					return s.a.createElement(m.c, {
						submit: async () => {
							await ((e, t) => {
								const a = {
									channels: t
								};
								return Object(x.a)(e, {
									...k,
									variables: {
										input: a
									}
								})
							})(e(), [])
						},
						submitButtonText: S._("Mark as Read", null, {
							hk: "2GTSlC"
						})
					}, s.a.createElement(m.b, null, S._("Mark all as read?", null, {
						hk: "1XCKs7"
					})), s.a.createElement(m.a, null, S._("Mark all conversations and invites as read.", null, {
						hk: "1iyaXi"
					})))
				},
				j = a("./src/chat/components/Sidebar/SettingsPanel/SettingsGroup/index.m.less"),
				g = a.n(j);
			var O = ({
					headerText: e,
					children: t
				}) => s.a.createElement("div", {
					className: g.a.SettingsGroup
				}, s.a.createElement("div", {
					className: g.a.Header
				}, e), t ? s.a.createElement("div", {
					className: g.a.Content
				}, t) : null),
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
			var N = e => s.a.createElement(L.a, M({}, e, {
					viewBox: "0 0 20 20"
				}), e.isFilled ? s.a.createElement("path", {
					d: "M8.207,15.707,6.793,14.293,11.086,10,6.793,5.707,8.207,4.293l5,5a1,1,0,0,1,0,1.414Z"
				}) : s.a.createElement("path", {
					d: "M7.942,15.442l-.884-.884L11.616,10,7.058,5.442l.884-.884,5,5a.625.625,0,0,1,0,.884Z"
				})),
				y = a("./src/chat/components/Sidebar/SettingsPanel/SettingsItem/index.m.less"),
				P = a.n(y),
				I = a("./src/chat/helpers/dom.ts");
			var T, C = ({
					className: e,
					text: t,
					onclick: a,
					children: n,
					isSelected: c,
					shouldShowArrow: r
				}) => s.a.createElement("div", {
					className: Object(w.a)(P.a.SettingsItem, {
						[P.a.selected]: c && r
					}, e),
					onClick: Object(I.a)(a)
				}, s.a.createElement("div", {
					className: P.a.Icon
				}, n), s.a.createElement("div", {
					className: P.a.Text
				}, t), r && !c ? s.a.createElement("div", {
					className: P.a.OpenScreenArrow
				}, s.a.createElement(N, null)) : null),
				G = a("./src/chat/constants/channels.ts");
			! function(e) {
				e.About = "about", e.InvitePeople = "invitePeople", e.MuteNotifications = "muteNotifications", e.UnmuteNotifications = "unmuteNotifications", e.LeaveGroup = "leaveGroup", e.LeaveChat = "leaveChat", e.InviteLink = "inviteLink", e.MemberRequirements = "memberRequirements", e.Theme = "theme", e.PrivacyAndSupport = "privacyAndSupport", e.MarkAllAsRead = "markAllAsRead", e.StartGroupChat = "startGroupChat", e.BlockUser = "blockUser"
			}(T || (T = {}));
			const {
				About: B,
				InvitePeople: H,
				MuteNotifications: U,
				UnmuteNotifications: R,
				LeaveChat: Z,
				LeaveGroup: Q,
				InviteLink: q,
				Theme: V,
				PrivacyAndSupport: D,
				MarkAllAsRead: F,
				StartGroupChat: J,
				BlockUser: W
			} = T, z = {
				directChannel: [J, W, U, R, Z],
				groupChannel: [B, H, U, R, Q],
				hostTools: [q],
				globalSettings: [V, D, F]
			}, Y = (e, t) => !(e === U && t), K = (e, t) => !(e === R && !t), X = (e, t) => !(e === V && !t);
			var $ = a("./src/chat/icons/svgs/ArrowLeft/index.tsx"),
				ee = a("./src/chat/icons/svgs/Block/index.tsx"),
				te = a("./src/chat/icons/svgs/ChangeTheme/index.tsx"),
				ae = a("./src/chat/icons/svgs/DisableNotifications/index.tsx"),
				ne = a("./src/chat/icons/svgs/EnableNotifications/index.tsx"),
				ce = a("./src/chat/icons/svgs/InfoIcon/index.tsx"),
				se = a("./src/chat/icons/svgs/InviteMember/index.tsx");

			function re() {
				return (re = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var a = arguments[t];
						for (var n in a) Object.prototype.hasOwnProperty.call(a, n) && (e[n] = a[n])
					}
					return e
				}).apply(this, arguments)
			}
			var le = e => s.a.createElement(L.a, re({}, e, {
					viewBox: "0 0 20 20"
				}), s.a.createElement(s.a.Fragment, null, s.a.createElement("path", {
					d: "M13,.375A6.633,6.633,0,0,0,6.375,7,6.559,6.559,0,0,0,6.8,9.318L.375,15.741v3.884h5.25v-3h3v-3H13A6.625,6.625,0,0,0,13,.375Zm0,12H7.375v3h-3v3H1.625V16.259L8.282,9.6,8.1,9.209A5.373,5.373,0,1,1,13,12.375Z"
				}), s.a.createElement("circle", {
					cx: "14",
					cy: "6",
					r: "1.625"
				}))),
				oe = a("./src/chat/icons/svgs/Leave/index.tsx"),
				ie = a("./src/chat/icons/svgs/Link/index.tsx");

			function ue() {
				return (ue = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var a = arguments[t];
						for (var n in a) Object.prototype.hasOwnProperty.call(a, n) && (e[n] = a[n])
					}
					return e
				}).apply(this, arguments)
			}
			var he = e => s.a.createElement(L.a, ue({}, e, {
				viewBox: "0 0 20 20"
			}), e.isFilled ? s.a.createElement("path", {
				d: "M16.5,7.875H16V6A6,6,0,0,0,4,6V7.875H3.5A1.627,1.627,0,0,0,1.875,9.5v8A1.627,1.627,0,0,0,3.5,19.125h13A1.627,1.627,0,0,0,18.125,17.5v-8A1.627,1.627,0,0,0,16.5,7.875ZM6,6a4,4,0,0,1,8,0V7.875H6Z"
			}) : s.a.createElement("path", {
				d: "M16.5,7.875H15.125V6.188A5.227,5.227,0,0,0,10,.875,5.227,5.227,0,0,0,4.875,6.188V7.875H3.5A1.627,1.627,0,0,0,1.875,9.5v8A1.627,1.627,0,0,0,3.5,19.125h13A1.627,1.627,0,0,0,18.125,17.5v-8A1.627,1.627,0,0,0,16.5,7.875ZM6.125,6.188A3.976,3.976,0,0,1,10,2.125a3.976,3.976,0,0,1,3.875,4.063V7.875H6.125ZM16.875,17.5a.375.375,0,0,1-.375.375H3.5a.375.375,0,0,1-.375-.375v-8A.375.375,0,0,1,3.5,9.125h13a.375.375,0,0,1,.375.375Z"
			}));

			function me() {
				return (me = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var a = arguments[t];
						for (var n in a) Object.prototype.hasOwnProperty.call(a, n) && (e[n] = a[n])
					}
					return e
				}).apply(this, arguments)
			}
			var de = e => s.a.createElement(L.a, me({}, e, {
					viewBox: "0 0 20 20"
				}), e.isFilled ? s.a.createElement("path", {
					d: "M18.324,4.171,12.345.654a4.629,4.629,0,0,0-4.69,0L1.676,4.171a1.633,1.633,0,0,0-.8,1.4V16.5A1.627,1.627,0,0,0,2.5,18.125h15A1.627,1.627,0,0,0,19.125,16.5V5.572A1.633,1.633,0,0,0,18.324,4.171ZM8.881,13.179l-.381.029H8.189l-.29-.249L5.97,11.03,7.03,9.97,8.5,11.439,12.97,6.97l1.06,1.06Z"
				}) : s.a.createElement(s.a.Fragment, null, s.a.createElement("path", {
					d: "M18.324,4.171,12.345.654a4.629,4.629,0,0,0-4.69,0L1.676,4.171a1.633,1.633,0,0,0-.8,1.4V16.5A1.627,1.627,0,0,0,2.5,18.125h15A1.627,1.627,0,0,0,19.125,16.5V5.572A1.633,1.633,0,0,0,18.324,4.171ZM17.875,16.5a.375.375,0,0,1-.375.375H2.5a.375.375,0,0,1-.375-.375V5.572a.375.375,0,0,1,.185-.323L8.289,1.731a3.38,3.38,0,0,1,3.422,0L17.69,5.249a.375.375,0,0,1,.185.323Z"
				}), s.a.createElement("polygon", {
					points: "8.5 11.616 6.942 10.058 6.058 10.942 7.987 12.871 8.241 13.083 8.5 13.083 8.83 13.054 13.942 7.942 13.058 7.058 8.5 11.616"
				}))),
				be = a("./src/chat/models/Channel/index.ts"),
				pe = a("./src/chat/models/Settings/index.ts"),
				ve = a("./src/chat/selectors/experiments.ts"),
				_e = a("./src/chat/selectors/platform.ts"),
				Ae = a("./src/chat/selectors/theme.ts"),
				xe = a("./src/chat/components/Sidebar/SettingsPanel/index.m.less"),
				ke = a.n(xe);
			const {
				BLOCK_USER: Ee,
				LEAVE_CHAT: Se,
				LEAVE_GROUP: fe,
				MARK_ALL_AS_READ: je
			} = pe.a, ge = e => {
				switch (e) {
					case T.About:
						return {
							text: n.fbt._("About", null, {
								hk: "3WuxG2"
							}), icon: s.a.createElement(ce.a, null), shouldShowArrow: !0, channelAction: G.a.VIEW_ABOUT
						};
					case T.InvitePeople:
						return {
							text: n.fbt._("Invite people", null, {
								hk: "cLHG7"
							}), icon: s.a.createElement(se.a, null), shouldShowArrow: !0, channelAction: G.a.INVITE_MEMBERS
						};
					case T.MuteNotifications:
						return {
							text: n.fbt._("Mute notifications", null, {
								hk: "1x4lSk"
							}), icon: s.a.createElement(ae.a, null)
						};
					case T.UnmuteNotifications:
						return {
							text: n.fbt._("Unmute notifications", null, {
								hk: "71iyb"
							}), icon: s.a.createElement(ne.a, null)
						};
					case T.LeaveGroup:
						return {
							text: n.fbt._("Leave group", null, {
								hk: "2yrVhm"
							}), icon: s.a.createElement(oe.a, null)
						};
					case T.LeaveChat:
						return {
							text: n.fbt._("Leave chat", null, {
								hk: "399LRd"
							}), icon: s.a.createElement(oe.a, null)
						};
					case T.InviteLink:
						return {
							text: n.fbt._("Invite link", null, {
								hk: "4hT3Ob"
							}), icon: s.a.createElement(ie.a, null), shouldShowArrow: !0, channelAction: G.a.INVITE_LINK_SETTINGS
						};
					case T.MemberRequirements:
						return {
							text: n.fbt._("Member requirements", null, {
								hk: "npHyq"
							}), icon: s.a.createElement(he, null), shouldShowArrow: !0
						};
					case T.Theme:
						return {
							text: n.fbt._("Theme", null, {
								hk: "4mjZrI"
							}), icon: s.a.createElement(te.a, null), shouldShowArrow: !0, className: ke.a.Theme, channelAction: G.a.THEMES
						};
					case T.PrivacyAndSupport:
						return {
							text: n.fbt._("Privacy & support", null, {
								hk: "36YF4A"
							}), icon: s.a.createElement(le, null), shouldShowArrow: !0
						};
					case T.MarkAllAsRead:
						return {
							text: n.fbt._("Mark all as read", null, {
								hk: "2FiPP9"
							}), icon: s.a.createElement(de, null)
						};
					case T.StartGroupChat:
						return {
							text: n.fbt._("Start a group chat", null, {
								hk: "2YJQkg"
							}), icon: s.a.createElement(se.a, null), shouldShowArrow: !0
						};
					case T.BlockUser:
						return {
							text: n.fbt._("Block user", null, {
								hk: "3mQRgx"
							}), icon: s.a.createElement(ee.a, null)
						};
					default:
						return {
							text: "Unknown item", icon: s.a.createElement("span", null)
						}
				}
			};
			t.default = ({
				channel: e
			}) => {
				const t = m.d,
					a = Object(r.d)(),
					[h, d] = Object(c.useState)(null),
					p = Object(r.e)(t => Object(v.L)(t, e.channelId)),
					_ = Object(r.e)(ve.w),
					x = Object(r.e)(ve.i),
					k = Object(r.e)(v.a),
					E = Object(r.e)(Ae.e),
					S = Object(r.e)(_e.d),
					j = Object(r.e)(v.r),
					g = k && e.type === be.b.Group,
					w = Object(c.useMemo)(() => {
						if (e) switch (e.type) {
							case be.b.Direct:
								return z.directChannel.filter(e => Y(e, p) && K(e, p) && X(e, _));
							case be.b.Group:
								return z.groupChannel.filter(e => Y(e, p) && K(e, p) && X(e, _))
						}
					}, [e, p, _]),
					L = t => t.map(t => t !== T.InviteLink || x ? s.a.createElement(C, {
						className: E && _ && t === T.Theme ? ke.a.Theme : void 0,
						onclick: () => (t => {
							switch (t) {
								case T.About:
									a(Object(l.k)()), a(Object(i.jb)());
									break;
								case T.InvitePeople:
									a(Object(l.c)()), a(Object(i.c)());
									break;
								case T.MuteNotifications:
									a(Object(l.e)()), a(Object(i.P)());
									break;
								case T.UnmuteNotifications:
									a(Object(l.g)()), a(Object(i.ab)());
									break;
								case T.LeaveChat:
									d(Se);
									break;
								case T.LeaveGroup:
									d(fe);
									break;
								case T.Theme:
									a(Object(o.h)()), a(Object(i.f)());
									break;
								case T.InviteLink:
									a(Object(o.e)(o.b.SESSION_LAST)), a(Object(l.b)(e.channelId));
									break;
								case T.StartGroupChat:
									a(Object(l.i)());
									break;
								case T.BlockUser:
									d(Ee);
									break;
								case T.MarkAllAsRead:
									d(je);
									break;
								case T.PrivacyAndSupport:
									return a(Object(o.g)())
							}
						})(t),
						isSelected: !!S && ge(t).channelAction === S,
						key: t,
						text: ge(t).text,
						shouldShowArrow: ge(t).shouldShowArrow
					}, ge(t).icon) : null);
				return s.a.createElement("div", {
					className: ke.a.SettingsPanel
				}, s.a.createElement("div", {
					className: ke.a.Header
				}, s.a.createElement($.a, {
					className: ke.a.BackIcon,
					onClick: () => {
						a(Object(o.i)())
					}
				}), n.fbt._("Settings", null, {
					hk: "Mj4q4"
				})), s.a.createElement("div", {
					className: ke.a.Content
				}, s.a.createElement(O, {
					headerText: (() => e.type === be.b.Direct ? n.fbt._("This chat", null, {
						hk: "ao8jp"
					}) : n.fbt._("This group", null, {
						hk: "1phz2a"
					}))()
				}, w ? L(w) : null), g && x ? s.a.createElement(O, {
					headerText: n.fbt._("Host tools", null, {
						hk: "2cuDsU"
					})
				}, L(z.hostTools)) : null, s.a.createElement(O, {
					headerText: (() => g ? n.fbt._("Global settings", null, {
						hk: "1wpYs8"
					}) : n.fbt._("Global", null, {
						hk: "3UNhmn"
					}))()
				}, L(z.globalSettings)), s.a.createElement(t.Provider, {
					value: () => {
						d(null)
					}
				}, (() => {
					switch (h) {
						case Ee:
							return j ? s.a.createElement(u.a, {
								userToBlock: j
							}) : null;
						case fe:
							return s.a.createElement(A, null);
						case je:
							return s.a.createElement(f, null);
						case Se:
							return j ? s.a.createElement(b, {
								userToLeave: j
							}) : null;
						default:
							return null
					}
				})())))
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
//# sourceMappingURL=https://www.redditstatic.com/desktop2x/SettingsPanel.7202767c5e8496155f68.js.map