// https://www.redditstatic.com/desktop2x/SettingsPanel.fd0008ec36fb270d6fce.js
// Retrieved at 11/14/2022, 7:00:06 PM by Reddit Dataminer v1.0.0
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
				l = a("./src/chat/actions/channel.ts"),
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
					const a = Object(r.d)();
					return s.a.createElement(d.c, {
						submit: () => {
							a(Object(m.a)()), a(Object(u.M)())
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
				fbt: A
			} = a("./node_modules/fbt/lib/FbtPublic.js");
			var _ = () => {
					const e = Object(r.d)(),
						t = Object(r.e)(p.o);
					return s.a.createElement(d.c, {
						submit: () => {
							t && e(Object(l.H)(t)), e(Object(u.M)())
						},
						submitButtonText: A._("Yes, Leave", null, {
							hk: "1lG6hO"
						})
					}, s.a.createElement(d.b, null, A._("Leave group?", null, {
						hk: "4qlYAa"
					})), s.a.createElement(d.a, null, A._("Once you leave, you won't get new messages and will need another invite to rejoin.", null, {
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
				L = a("./src/chat/icons/svgs/CaretRight/index.tsx"),
				M = a("./src/chat/components/Sidebar/SettingsPanel/SettingsItem/index.m.less"),
				N = a.n(M),
				C = a("./src/chat/helpers/dom.ts");
			var P, y = e => {
					let {
						className: t,
						text: a,
						onclick: n,
						children: c,
						isSelected: r,
						shouldShowArrow: l
					} = e;
					return s.a.createElement("div", {
						className: Object(w.a)(N.a.SettingsItem, {
							[N.a.selected]: r && l
						}, t),
						onClick: Object(C.a)(n)
					}, s.a.createElement("div", {
						className: N.a.Icon
					}, c), s.a.createElement("div", {
						className: N.a.Text
					}, a), l && !r ? s.a.createElement("div", {
						className: N.a.OpenScreenArrow
					}, s.a.createElement(L.a, null)) : null)
				},
				I = a("./src/chat/constants/channels.ts");
			! function(e) {
				e.About = "about", e.InvitePeople = "invitePeople", e.MuteNotifications = "muteNotifications", e.UnmuteNotifications = "unmuteNotifications", e.LeaveGroup = "leaveGroup", e.LeaveChat = "leaveChat", e.InviteLink = "inviteLink", e.MemberRequirements = "memberRequirements", e.Theme = "theme", e.PrivacyAndSupport = "privacyAndSupport", e.MarkAllAsRead = "markAllAsRead", e.StartGroupChat = "startGroupChat", e.BlockUser = "blockUser", e.LeaveLiveChat = "leaveLiveChat"
			}(P || (P = {}));
			const {
				About: T,
				InvitePeople: B,
				MuteNotifications: G,
				UnmuteNotifications: H,
				LeaveChat: R,
				LeaveGroup: U,
				InviteLink: Z,
				Theme: Q,
				PrivacyAndSupport: V,
				MarkAllAsRead: q,
				StartGroupChat: D,
				BlockUser: F,
				LeaveLiveChat: J
			} = P, W = {
				directChannel: [D, F, G, H, R],
				groupChannel: [T, B, G, H, U],
				liveChat: [J],
				hostTools: [Z],
				globalSettings: [Q, V, q]
			}, z = (e, t) => !(e === G && t), Y = (e, t) => !(e === H && !t), K = (e, t) => !(e === Q && !t);
			var X = a("./src/chat/icons/svgs/ArrowLeft/index.tsx"),
				$ = a("./src/chat/icons/svgs/Block/index.tsx"),
				ee = a("./src/chat/icons/svgs/ChangeTheme/index.tsx"),
				te = a("./src/chat/icons/svgs/DisableNotifications/index.tsx"),
				ae = a("./src/chat/icons/svgs/EnableNotifications/index.tsx"),
				ne = a("./src/chat/icons/svgs/InfoIcon/index.tsx"),
				ce = a("./src/chat/icons/svgs/InviteMember/index.tsx"),
				se = a("./src/chat/controls/Svg/index.tsx");

			function re() {
				return (re = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var a = arguments[t];
						for (var n in a) Object.prototype.hasOwnProperty.call(a, n) && (e[n] = a[n])
					}
					return e
				}).apply(this, arguments)
			}
			var le = e => s.a.createElement(se.a, re({}, e, {
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
			var he = e => s.a.createElement(se.a, ue({}, e, {
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
			var de = e => s.a.createElement(se.a, me({}, e, {
					viewBox: "0 0 20 20"
				}), e.isFilled ? s.a.createElement("path", {
					d: "M18.324,4.171,12.345.654a4.629,4.629,0,0,0-4.69,0L1.676,4.171a1.633,1.633,0,0,0-.8,1.4V16.5A1.627,1.627,0,0,0,2.5,18.125h15A1.627,1.627,0,0,0,19.125,16.5V5.572A1.633,1.633,0,0,0,18.324,4.171ZM8.881,13.179l-.381.029H8.189l-.29-.249L5.97,11.03,7.03,9.97,8.5,11.439,12.97,6.97l1.06,1.06Z"
				}) : s.a.createElement(s.a.Fragment, null, s.a.createElement("path", {
					d: "M18.324,4.171,12.345.654a4.629,4.629,0,0,0-4.69,0L1.676,4.171a1.633,1.633,0,0,0-.8,1.4V16.5A1.627,1.627,0,0,0,2.5,18.125h15A1.627,1.627,0,0,0,19.125,16.5V5.572A1.633,1.633,0,0,0,18.324,4.171ZM17.875,16.5a.375.375,0,0,1-.375.375H2.5a.375.375,0,0,1-.375-.375V5.572a.375.375,0,0,1,.185-.323L8.289,1.731a3.38,3.38,0,0,1,3.422,0L17.69,5.249a.375.375,0,0,1,.185.323Z"
				}), s.a.createElement("polygon", {
					points: "8.5 11.616 6.942 10.058 6.058 10.942 7.987 12.871 8.241 13.083 8.5 13.083 8.83 13.054 13.942 7.942 13.058 7.058 8.5 11.616"
				}))),
				be = a("./src/chat/models/Channel/index.ts"),
				ve = a("./src/chat/models/Settings/index.ts"),
				pe = a("./src/chat/selectors/experiments.ts"),
				Ae = a("./src/chat/selectors/platform.ts"),
				_e = a("./src/chat/selectors/theme.ts"),
				ke = a("./src/chat/components/Sidebar/SettingsPanel/index.m.less"),
				xe = a.n(ke);
			const {
				BLOCK_USER: Ee,
				LEAVE_CHAT: Se,
				LEAVE_GROUP: fe,
				MARK_ALL_AS_READ: je
			} = ve.a, ge = e => {
				switch (e) {
					case P.About:
						return {
							text: n.fbt._("About", null, {
								hk: "3WuxG2"
							}), icon: s.a.createElement(ne.a, null), shouldShowArrow: !0, channelAction: I.a.VIEW_ABOUT
						};
					case P.InvitePeople:
						return {
							text: n.fbt._("Invite people", null, {
								hk: "cLHG7"
							}), icon: s.a.createElement(ce.a, null), shouldShowArrow: !0, channelAction: I.a.INVITE_MEMBERS
						};
					case P.MuteNotifications:
						return {
							text: n.fbt._("Mute notifications", null, {
								hk: "1x4lSk"
							}), icon: s.a.createElement(te.a, null)
						};
					case P.UnmuteNotifications:
						return {
							text: n.fbt._("Unmute notifications", null, {
								hk: "71iyb"
							}), icon: s.a.createElement(ae.a, null)
						};
					case P.LeaveGroup:
						return {
							text: n.fbt._("Leave group", null, {
								hk: "2yrVhm"
							}), icon: s.a.createElement(oe.a, null)
						};
					case P.LeaveLiveChat:
					case P.LeaveChat:
						return {
							text: n.fbt._("Leave chat", null, {
								hk: "399LRd"
							}), icon: s.a.createElement(oe.a, null)
						};
					case P.InviteLink:
						return {
							text: n.fbt._("Invite link", null, {
								hk: "4hT3Ob"
							}), icon: s.a.createElement(ie.a, null), shouldShowArrow: !0, channelAction: I.a.INVITE_LINK_SETTINGS
						};
					case P.MemberRequirements:
						return {
							text: n.fbt._("Member requirements", null, {
								hk: "npHyq"
							}), icon: s.a.createElement(he, null), shouldShowArrow: !0
						};
					case P.Theme:
						return {
							text: n.fbt._("Theme", null, {
								hk: "4mjZrI"
							}), icon: s.a.createElement(ee.a, null), shouldShowArrow: !0, className: xe.a.Theme, channelAction: I.a.THEMES
						};
					case P.PrivacyAndSupport:
						return {
							text: n.fbt._("Privacy & support", null, {
								hk: "36YF4A"
							}), icon: s.a.createElement(le, null), shouldShowArrow: !0
						};
					case P.MarkAllAsRead:
						return {
							text: n.fbt._("Mark all as read", null, {
								hk: "2FiPP9"
							}), icon: s.a.createElement(de, null)
						};
					case P.StartGroupChat:
						return {
							text: n.fbt._("Start a group chat", null, {
								hk: "2YJQkg"
							}), icon: s.a.createElement(ce.a, null), shouldShowArrow: !0
						};
					case P.BlockUser:
						return {
							text: n.fbt._("Block user", null, {
								hk: "3mQRgx"
							}), icon: s.a.createElement($.a, null)
						};
					default:
						return {
							text: "Unknown item", icon: s.a.createElement("span", null)
						}
				}
			}, Oe = e => {
				let {
					channel: t
				} = e;
				const a = d.d,
					l = Object(r.d)(),
					[m, b] = Object(c.useState)(null),
					A = Object(r.e)(e => Object(p.N)(e, t.channelId)),
					k = Object(r.e)(pe.B),
					x = Object(r.e)(pe.i),
					E = Object(r.e)(pe.n),
					S = Object(r.e)(pe.k),
					j = Object(r.e)(pe.l),
					g = E || S || j,
					w = Object(r.e)(p.a),
					L = Object(r.e)(_e.e),
					M = Object(r.e)(Ae.d),
					N = Object(r.e)(p.t),
					C = w && t.type === be.b.Group,
					I = Object(c.useMemo)(() => {
						if (t) switch (t.type) {
							case be.b.Direct:
								return W.directChannel.filter(e => z(e, A) && Y(e, A) && K(e, k));
							case be.b.Group:
								return W.groupChannel.filter(e => z(e, A) && Y(e, A) && K(e, k))
						}
					}, [t, A, k]),
					T = e => e.map(e => (e => {
						switch (e) {
							case P.InviteLink:
								return !x;
							case P.Theme:
								return !E;
							case P.MarkAllAsRead:
								return !S;
							case P.PrivacyAndSupport:
								return !j;
							default:
								return !1
						}
					})(e) ? null : s.a.createElement(y, {
						className: L && k && e === P.Theme ? xe.a.Theme : void 0,
						onclick: () => (e => {
							switch (e) {
								case P.About:
									l(Object(o.k)()), l(Object(u.ub)());
									break;
								case P.InvitePeople:
									l(Object(o.c)()), l(Object(u.c)());
									break;
								case P.MuteNotifications:
									l(Object(o.e)()), l(Object(u.V)());
									break;
								case P.UnmuteNotifications:
									l(Object(o.g)()), l(Object(u.ib)());
									break;
								case P.LeaveChat:
									b(Se);
									break;
								case P.LeaveGroup:
									b(fe);
									break;
								case P.Theme:
									l(Object(i.h)()), l(Object(u.f)());
									break;
								case P.InviteLink:
									l(Object(i.e)(i.b.SESSION_LAST)), l(Object(o.b)(t.channelId));
									break;
								case P.StartGroupChat:
									l(Object(o.i)());
									break;
								case P.BlockUser:
									b(Ee);
									break;
								case P.MarkAllAsRead:
									b(je);
									break;
								case P.PrivacyAndSupport:
									return l(Object(i.g)())
							}
						})(e),
						isSelected: !!M && ge(e).channelAction === M,
						key: e,
						text: ge(e).text,
						shouldShowArrow: ge(e).shouldShowArrow
					}, ge(e).icon));
				return s.a.createElement("div", {
					className: xe.a.SettingsPanel
				}, s.a.createElement("div", {
					className: xe.a.Header
				}, s.a.createElement(X.a, {
					className: xe.a.BackIcon,
					onClick: () => {
						l(Object(i.i)())
					}
				}), n.fbt._("Settings", null, {
					hk: "Mj4q4"
				})), s.a.createElement("div", {
					className: xe.a.Content
				}, s.a.createElement(O, {
					headerText: (() => t.type === be.b.Direct ? n.fbt._("This chat", null, {
						hk: "ao8jp"
					}) : n.fbt._("This group", null, {
						hk: "1phz2a"
					}))()
				}, I ? T(I) : null), C && x ? s.a.createElement(O, {
					headerText: n.fbt._("Host tools", null, {
						hk: "2cuDsU"
					})
				}, T(W.hostTools)) : null, g && s.a.createElement(O, {
					headerText: (() => C ? n.fbt._("Global settings", null, {
						hk: "1wpYs8"
					}) : n.fbt._("Global", null, {
						hk: "3UNhmn"
					}))()
				}, T(W.globalSettings)), s.a.createElement(a.Provider, {
					value: () => {
						b(null)
					}
				}, (() => {
					switch (m) {
						case Ee:
							return N ? s.a.createElement(h.a, {
								userToBlock: N
							}) : null;
						case fe:
							return s.a.createElement(_, null);
						case je:
							return s.a.createElement(f, null);
						case Se:
							return N ? s.a.createElement(v, {
								userToLeave: N
							}) : null;
						default:
							return null
					}
				})())))
			}, we = e => {
				let {
					liveChatPost: t
				} = e;
				const a = Object(r.d)(),
					c = () => {
						a(Object(i.i)())
					};
				return s.a.createElement("div", {
					className: xe.a.SettingsPanel
				}, s.a.createElement("div", {
					className: xe.a.Header
				}, s.a.createElement(X.a, {
					className: xe.a.BackIcon,
					onClick: c
				}), n.fbt._("Settings", null, {
					hk: "Mj4q4"
				})), s.a.createElement("div", {
					className: xe.a.Content
				}, s.a.createElement(O, {
					headerText: n.fbt._("This chat", null, {
						hk: "ao8jp"
					})
				}, (e => e.map(e => s.a.createElement(y, {
					onclick: () => (e => {
						switch (e) {
							case P.LeaveLiveChat:
								a(Object(l.I)(t.post.id)), c()
						}
					})(e),
					key: e,
					text: ge(e).text,
					shouldShowArrow: ge(e).shouldShowArrow
				}, ge(e).icon)))(W.liveChat))))
			};
			t.default = e => {
				let {
					channel: t,
					liveChatPost: a
				} = e;
				return Object(r.e)(pe.s) && a ? s.a.createElement(we, {
					liveChatPost: a
				}) : t ? s.a.createElement(Oe, {
					channel: t
				}) : null
			}
		},
		"./src/chat/icons/svgs/CaretRight/index.tsx": function(e, t, a) {
			"use strict";
			var n = a("./node_modules/react/index.js"),
				c = a.n(n),
				s = a("./src/chat/controls/Svg/index.tsx");

			function r() {
				return (r = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var a = arguments[t];
						for (var n in a) Object.prototype.hasOwnProperty.call(a, n) && (e[n] = a[n])
					}
					return e
				}).apply(this, arguments)
			}
			t.a = e => c.a.createElement(s.a, r({}, e, {
				viewBox: "0 0 20 20"
			}), e.isFilled ? c.a.createElement("path", {
				d: "M8.207,15.707,6.793,14.293,11.086,10,6.793,5.707,8.207,4.293l5,5a1,1,0,0,1,0,1.414Z"
			}) : c.a.createElement("path", {
				d: "M7.942,15.442l-.884-.884L11.616,10,7.058,5.442l.884-.884,5,5a.625.625,0,0,1,0,.884Z"
			}))
		},
		"./src/redditGQL/operations/UpdateChatMessagesAsRead.json": function(e) {
			e.exports = JSON.parse('{"id":"bfc6fe51708d"}')
		}
	}
]);
//# sourceMappingURL=https://www.redditstatic.com/desktop2x/SettingsPanel.fd0008ec36fb270d6fce.js.map