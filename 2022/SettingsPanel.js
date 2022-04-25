// https://www.redditstatic.com/desktop2x/SettingsPanel.b5c5c09e9875c8786f65.js
// Retrieved at 4/25/2022, 2:40:04 PM by Reddit Dataminer v1.0.0
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
				r = a.n(c),
				s = a("./node_modules/react-redux/es/index.js"),
				l = a("./src/chat/actions/channel/dropdown.ts"),
				o = a("./src/chat/actions/settings/index.ts"),
				i = a("./src/chat/actions/tracking.ts"),
				u = a("./src/chat/components/Modals/BlockUser/index.tsx"),
				h = a("./src/chat/actions/channel/hide.ts"),
				m = a("./src/chat/components/Modals/ModalOverlay/index.tsx");
			const {
				fbt: d
			} = a("./node_modules/fbt/lib/FbtPublic.js");
			var b = e => {
					let {
						userToLeave: t
					} = e;
					const a = Object(s.d)();
					return r.a.createElement(m.c, {
						submit: () => {
							a(Object(h.a)()), a(Object(i.H)())
						},
						submitButtonText: d._("Yes, Leave", null, {
							hk: "4aBFrU"
						})
					}, r.a.createElement(m.b, null, d._("Leave chat?", null, {
						hk: "1BniWn"
					})), r.a.createElement(m.a, null, d._("This conversation will be hidden but you won't lose your chat history, so you can continue chatting with {userName}{=at any time.}", [d._param("userName", `u/${t.name}`), d._param("=at any time.", r.a.createElement("span", null, d._("at any time.", null, {
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
					const e = Object(s.d)(),
						t = Object(s.e)(v.n);
					return r.a.createElement(m.c, {
						submit: () => {
							t && e(Object(p.G)(t)), e(Object(i.H)())
						},
						submitButtonText: _._("Yes, Leave", null, {
							hk: "1lG6hO"
						})
					}, r.a.createElement(m.b, null, _._("Leave group?", null, {
						hk: "4qlYAa"
					})), r.a.createElement(m.a, null, _._("Once you leave, you won't get new messages and will need another invite to rejoin.", null, {
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
					return r.a.createElement(m.c, {
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
					}, r.a.createElement(m.b, null, S._("Mark all as read?", null, {
						hk: "1XCKs7"
					})), r.a.createElement(m.a, null, S._("Mark all conversations and invites as read.", null, {
						hk: "1iyaXi"
					})))
				},
				g = a("./src/chat/components/Sidebar/SettingsPanel/SettingsGroup/index.m.less"),
				j = a.n(g);
			var O = e => {
					let {
						headerText: t,
						children: a
					} = e;
					return r.a.createElement("div", {
						className: j.a.SettingsGroup
					}, r.a.createElement("div", {
						className: j.a.Header
					}, t), a ? r.a.createElement("div", {
						className: j.a.Content
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
			var N = e => r.a.createElement(L.a, M({}, e, {
					viewBox: "0 0 20 20"
				}), e.isFilled ? r.a.createElement("path", {
					d: "M8.207,15.707,6.793,14.293,11.086,10,6.793,5.707,8.207,4.293l5,5a1,1,0,0,1,0,1.414Z"
				}) : r.a.createElement("path", {
					d: "M7.942,15.442l-.884-.884L11.616,10,7.058,5.442l.884-.884,5,5a.625.625,0,0,1,0,.884Z"
				})),
				y = a("./src/chat/components/Sidebar/SettingsPanel/SettingsItem/index.m.less"),
				P = a.n(y),
				I = a("./src/chat/helpers/dom.ts");
			var T, C = e => {
					let {
						className: t,
						text: a,
						onclick: n,
						children: c,
						isSelected: s,
						shouldShowArrow: l
					} = e;
					return r.a.createElement("div", {
						className: Object(w.a)(P.a.SettingsItem, {
							[P.a.selected]: s && l
						}, t),
						onClick: Object(I.a)(n)
					}, r.a.createElement("div", {
						className: P.a.Icon
					}, c), r.a.createElement("div", {
						className: P.a.Text
					}, a), l && !s ? r.a.createElement("div", {
						className: P.a.OpenScreenArrow
					}, r.a.createElement(N, null)) : null)
				},
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
				re = a("./src/chat/icons/svgs/InviteMember/index.tsx");

			function se() {
				return (se = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var a = arguments[t];
						for (var n in a) Object.prototype.hasOwnProperty.call(a, n) && (e[n] = a[n])
					}
					return e
				}).apply(this, arguments)
			}
			var le = e => r.a.createElement(L.a, se({}, e, {
					viewBox: "0 0 20 20"
				}), r.a.createElement(r.a.Fragment, null, r.a.createElement("path", {
					d: "M13,.375A6.633,6.633,0,0,0,6.375,7,6.559,6.559,0,0,0,6.8,9.318L.375,15.741v3.884h5.25v-3h3v-3H13A6.625,6.625,0,0,0,13,.375Zm0,12H7.375v3h-3v3H1.625V16.259L8.282,9.6,8.1,9.209A5.373,5.373,0,1,1,13,12.375Z"
				}), r.a.createElement("circle", {
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
			var he = e => r.a.createElement(L.a, ue({}, e, {
				viewBox: "0 0 20 20"
			}), e.isFilled ? r.a.createElement("path", {
				d: "M16.5,7.875H16V6A6,6,0,0,0,4,6V7.875H3.5A1.627,1.627,0,0,0,1.875,9.5v8A1.627,1.627,0,0,0,3.5,19.125h13A1.627,1.627,0,0,0,18.125,17.5v-8A1.627,1.627,0,0,0,16.5,7.875ZM6,6a4,4,0,0,1,8,0V7.875H6Z"
			}) : r.a.createElement("path", {
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
			var de = e => r.a.createElement(L.a, me({}, e, {
					viewBox: "0 0 20 20"
				}), e.isFilled ? r.a.createElement("path", {
					d: "M18.324,4.171,12.345.654a4.629,4.629,0,0,0-4.69,0L1.676,4.171a1.633,1.633,0,0,0-.8,1.4V16.5A1.627,1.627,0,0,0,2.5,18.125h15A1.627,1.627,0,0,0,19.125,16.5V5.572A1.633,1.633,0,0,0,18.324,4.171ZM8.881,13.179l-.381.029H8.189l-.29-.249L5.97,11.03,7.03,9.97,8.5,11.439,12.97,6.97l1.06,1.06Z"
				}) : r.a.createElement(r.a.Fragment, null, r.a.createElement("path", {
					d: "M18.324,4.171,12.345.654a4.629,4.629,0,0,0-4.69,0L1.676,4.171a1.633,1.633,0,0,0-.8,1.4V16.5A1.627,1.627,0,0,0,2.5,18.125h15A1.627,1.627,0,0,0,19.125,16.5V5.572A1.633,1.633,0,0,0,18.324,4.171ZM17.875,16.5a.375.375,0,0,1-.375.375H2.5a.375.375,0,0,1-.375-.375V5.572a.375.375,0,0,1,.185-.323L8.289,1.731a3.38,3.38,0,0,1,3.422,0L17.69,5.249a.375.375,0,0,1,.185.323Z"
				}), r.a.createElement("polygon", {
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
				MARK_ALL_AS_READ: ge
			} = pe.a, je = e => {
				switch (e) {
					case T.About:
						return {
							text: n.fbt._("About", null, {
								hk: "3WuxG2"
							}), icon: r.a.createElement(ce.a, null), shouldShowArrow: !0, channelAction: G.a.VIEW_ABOUT
						};
					case T.InvitePeople:
						return {
							text: n.fbt._("Invite people", null, {
								hk: "cLHG7"
							}), icon: r.a.createElement(re.a, null), shouldShowArrow: !0, channelAction: G.a.INVITE_MEMBERS
						};
					case T.MuteNotifications:
						return {
							text: n.fbt._("Mute notifications", null, {
								hk: "1x4lSk"
							}), icon: r.a.createElement(ae.a, null)
						};
					case T.UnmuteNotifications:
						return {
							text: n.fbt._("Unmute notifications", null, {
								hk: "71iyb"
							}), icon: r.a.createElement(ne.a, null)
						};
					case T.LeaveGroup:
						return {
							text: n.fbt._("Leave group", null, {
								hk: "2yrVhm"
							}), icon: r.a.createElement(oe.a, null)
						};
					case T.LeaveChat:
						return {
							text: n.fbt._("Leave chat", null, {
								hk: "399LRd"
							}), icon: r.a.createElement(oe.a, null)
						};
					case T.InviteLink:
						return {
							text: n.fbt._("Invite link", null, {
								hk: "4hT3Ob"
							}), icon: r.a.createElement(ie.a, null), shouldShowArrow: !0, channelAction: G.a.INVITE_LINK_SETTINGS
						};
					case T.MemberRequirements:
						return {
							text: n.fbt._("Member requirements", null, {
								hk: "npHyq"
							}), icon: r.a.createElement(he, null), shouldShowArrow: !0
						};
					case T.Theme:
						return {
							text: n.fbt._("Theme", null, {
								hk: "4mjZrI"
							}), icon: r.a.createElement(te.a, null), shouldShowArrow: !0, className: ke.a.Theme, channelAction: G.a.THEMES
						};
					case T.PrivacyAndSupport:
						return {
							text: n.fbt._("Privacy & support", null, {
								hk: "36YF4A"
							}), icon: r.a.createElement(le, null), shouldShowArrow: !0
						};
					case T.MarkAllAsRead:
						return {
							text: n.fbt._("Mark all as read", null, {
								hk: "2FiPP9"
							}), icon: r.a.createElement(de, null)
						};
					case T.StartGroupChat:
						return {
							text: n.fbt._("Start a group chat", null, {
								hk: "2YJQkg"
							}), icon: r.a.createElement(re.a, null), shouldShowArrow: !0
						};
					case T.BlockUser:
						return {
							text: n.fbt._("Block user", null, {
								hk: "3mQRgx"
							}), icon: r.a.createElement(ee.a, null)
						};
					default:
						return {
							text: "Unknown item", icon: r.a.createElement("span", null)
						}
				}
			};
			t.default = e => {
				let {
					channel: t
				} = e;
				const a = m.d,
					h = Object(s.d)(),
					[d, p] = Object(c.useState)(null),
					_ = Object(s.e)(e => Object(v.L)(e, t.channelId)),
					x = Object(s.e)(ve.w),
					k = Object(s.e)(ve.i),
					E = Object(s.e)(v.a),
					S = Object(s.e)(Ae.e),
					g = Object(s.e)(_e.d),
					j = Object(s.e)(v.r),
					w = E && t.type === be.b.Group,
					L = Object(c.useMemo)(() => {
						if (t) switch (t.type) {
							case be.b.Direct:
								return z.directChannel.filter(e => Y(e, _) && K(e, _) && X(e, x));
							case be.b.Group:
								return z.groupChannel.filter(e => Y(e, _) && K(e, _) && X(e, x))
						}
					}, [t, _, x]),
					M = e => e.map(e => e !== T.InviteLink || k ? r.a.createElement(C, {
						className: S && x && e === T.Theme ? ke.a.Theme : void 0,
						onclick: () => (e => {
							switch (e) {
								case T.About:
									h(Object(l.k)()), h(Object(i.kb)());
									break;
								case T.InvitePeople:
									h(Object(l.c)()), h(Object(i.c)());
									break;
								case T.MuteNotifications:
									h(Object(l.e)()), h(Object(i.P)());
									break;
								case T.UnmuteNotifications:
									h(Object(l.g)()), h(Object(i.bb)());
									break;
								case T.LeaveChat:
									p(Se);
									break;
								case T.LeaveGroup:
									p(fe);
									break;
								case T.Theme:
									h(Object(o.h)()), h(Object(i.f)());
									break;
								case T.InviteLink:
									h(Object(o.e)(o.b.SESSION_LAST)), h(Object(l.b)(t.channelId));
									break;
								case T.StartGroupChat:
									h(Object(l.i)());
									break;
								case T.BlockUser:
									p(Ee);
									break;
								case T.MarkAllAsRead:
									p(ge);
									break;
								case T.PrivacyAndSupport:
									return h(Object(o.g)())
							}
						})(e),
						isSelected: !!g && je(e).channelAction === g,
						key: e,
						text: je(e).text,
						shouldShowArrow: je(e).shouldShowArrow
					}, je(e).icon) : null);
				return r.a.createElement("div", {
					className: ke.a.SettingsPanel
				}, r.a.createElement("div", {
					className: ke.a.Header
				}, r.a.createElement($.a, {
					className: ke.a.BackIcon,
					onClick: () => {
						h(Object(o.i)())
					}
				}), n.fbt._("Settings", null, {
					hk: "Mj4q4"
				})), r.a.createElement("div", {
					className: ke.a.Content
				}, r.a.createElement(O, {
					headerText: (() => t.type === be.b.Direct ? n.fbt._("This chat", null, {
						hk: "ao8jp"
					}) : n.fbt._("This group", null, {
						hk: "1phz2a"
					}))()
				}, L ? M(L) : null), w && k ? r.a.createElement(O, {
					headerText: n.fbt._("Host tools", null, {
						hk: "2cuDsU"
					})
				}, M(z.hostTools)) : null, r.a.createElement(O, {
					headerText: (() => w ? n.fbt._("Global settings", null, {
						hk: "1wpYs8"
					}) : n.fbt._("Global", null, {
						hk: "3UNhmn"
					}))()
				}, M(z.globalSettings)), r.a.createElement(a.Provider, {
					value: () => {
						p(null)
					}
				}, (() => {
					switch (d) {
						case Ee:
							return j ? r.a.createElement(u.a, {
								userToBlock: j
							}) : null;
						case fe:
							return r.a.createElement(A, null);
						case ge:
							return r.a.createElement(f, null);
						case Se:
							return j ? r.a.createElement(b, {
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
				return r
			}));
			var n = a("./node_modules/react/index.js"),
				c = a("./src/reddit/contexts/ApiContext.tsx");

			function r() {
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
//# sourceMappingURL=https://www.redditstatic.com/desktop2x/SettingsPanel.b5c5c09e9875c8786f65.js.map