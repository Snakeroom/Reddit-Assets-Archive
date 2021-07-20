// https://www.redditstatic.com/desktop2x/OverlayChannelInvited.e93a33746882dc68a7a4.js
// Retrieved at 7/20/2021, 12:40:05 PM by Reddit Dataminer v1.0.0
(window.__LOADABLE_LOADED_CHUNKS__ = window.__LOADABLE_LOADED_CHUNKS__ || []).push([
	["OverlayChannelInvited"], {
		"./src/chat/components/OverlayChannelInvited/index.m.less": function(e, t, a) {
			e.exports = {
				Container: "_2_usm-6VxbuOWiTnRHrW6_",
				container: "_2_usm-6VxbuOWiTnRHrW6_",
				TitleContainer: "_286hA91kPPTG16FrntDjnI",
				titleContainer: "_286hA91kPPTG16FrntDjnI",
				Title: "_2VM6vj7YAvos5YYrk4BZm",
				title: "_2VM6vj7YAvos5YYrk4BZm",
				NSFWIcon: "KMxUr4-PgnXZGf5PDaXpK",
				nsfwIcon: "KMxUr4-PgnXZGf5PDaXpK",
				UserPic: "_1VfnsRlasisMwqxtizmNQG",
				userPic: "_1VfnsRlasisMwqxtizmNQG",
				WarningTextNSFW: "_2J7sY3CGM_vmQmlMoGfZrh",
				warningTextNsfw: "_2J7sY3CGM_vmQmlMoGfZrh",
				MediaObject: "_2P47kg53Xxq3BQhzoaYl9a",
				mediaObject: "_2P47kg53Xxq3BQhzoaYl9a",
				LightTextSmall: "_2EZY5lK_rrQ9EWQLO-bTOa",
				lightTextSmall: "_2EZY5lK_rrQ9EWQLO-bTOa",
				BoldText: "_2UTzA9v9vTPII2cDuGNytT",
				boldText: "_2UTzA9v9vTPII2cDuGNytT",
				Scroller: "YjLnqfZg0dHuiTDoGknCl",
				scroller: "YjLnqfZg0dHuiTDoGknCl"
			}
		},
		"./src/chat/components/OverlayChannelInvited/index.tsx": function(e, t, a) {
			"use strict";
			a.r(t), a.d(t, "UserInfo", (function() {
				return G
			})), a.d(t, "Content", (function() {
				return P
			})), a.d(t, "OverlayChannelInvited", (function() {
				return U
			}));
			var n = a("./src/config.ts"),
				r = a("./node_modules/lodash/sortBy.js"),
				c = a.n(r),
				s = a("./node_modules/react/index.js"),
				l = a.n(s),
				o = a("./node_modules/react-redux/es/index.js"),
				i = a("./src/lib/opener/index.ts"),
				m = a("./src/chat/actions/channel.ts"),
				u = a("./src/chat/actions/tracking.ts"),
				d = a("./src/chat/components/MessageList/Messages/index.tsx"),
				h = a("./src/chat/components/OverlayNav/index.tsx"),
				p = a("./src/chat/components/Scroller/index.tsx"),
				x = a("./src/lib/lessComponent.tsx"),
				b = a("./src/chat/controls/MediaObject/index.m.less"),
				y = a.n(b);
			const O = x.a.wrapped(e => {
				const [t, a, n] = l.a.Children.toArray(e.children);
				return l.a.createElement("div", {
					className: e.className
				}, t, a, n)
			}, "MediaObject", y.a);
			var _ = a("./src/chat/controls/Overlay/index.tsx"),
				B = a("./src/chat/controls/OverlayControlBar/index.tsx"),
				v = a("./src/chat/controls/Title/index.tsx"),
				k = a("./src/chat/helpers/time/index.tsx"),
				N = a("./src/chat/icons/Nsfw/index.tsx"),
				j = a("./src/chat/icons/Userpic/index.tsx"),
				T = a("./src/chat/models/Channel/index.ts"),
				C = a("./src/chat/selectors/channels.ts"),
				E = a("./src/chat/selectors/contacts.ts"),
				f = a("./src/chat/selectors/experiments.ts"),
				g = a("./src/chat/components/OverlayChannelInvited/index.m.less"),
				I = a.n(g),
				A = a("./src/chat/constants/channels.ts");
			const {
				fbt: M
			} = a("./node_modules/fbt/lib/FbtPublic.js"), D = ({
				children: e
			}) => l.a.createElement("span", {
				className: I.a.LightTextSmall
			}, e), G = ({
				inviterContact: e
			}) => {
				if (!e) return null;
				const {
					linkKarma: t,
					created: a
				} = e, n = M._("Redditor since {amount of time}", [M._param("amount of time", Object(k.a)(a))], {
					hk: "37XXLN"
				}), r = M._({
					"*": "{karma count} karma",
					_1: "1 karma"
				}, [M._plural(t, "karma count")], {
					hk: "4uraW2"
				});
				return l.a.createElement(D, null, n, " • ", r)
			}, P = ({
				channelInviter: e,
				inviterContact: t,
				channelMessages: a,
				channelType: r,
				channelId: c
			}) => {
				const s = t && !!t.isNSFW;
				return e ? l.a.createElement(l.a.Fragment, null, l.a.createElement("a", {
					target: i.c.BLANK,
					rel: i.b,
					href: `${n.a.redditUrl}/user/${e.name}`
				}, l.a.createElement(O, {
					className: I.a.MediaObject
				}, s ? l.a.createElement(N.a, {
					className: I.a.NSFWIcon
				}) : l.a.createElement(j.a, {
					className: I.a.UserPic,
					userId: e.id
				}), l.a.createElement("div", {
					className: I.a.TitleContainer
				}, l.a.createElement(v.a, {
					className: I.a.Title,
					bold: !0
				}, e.name), s && l.a.createElement("span", {
					className: I.a.WarningTextNSFW
				}, M._("NSFW", null, {
					hk: "3rI4EF"
				}))), l.a.createElement(G, {
					inviterContact: t
				}))), void 0 !== r && c && l.a.createElement(w, {
					channelType: r,
					channelMessages: a,
					channelId: c
				}), l.a.createElement("div", {
					className: I.a.Container
				})) : null
			}, w = ({
				channelType: e,
				channelMessages: t,
				channelId: a
			}) => {
				const n = c()([...t], "createdAt");
				return t && t.length ? l.a.createElement(d.a, {
					channelType: e,
					messageList: n,
					inPreview: !0,
					channelId: a
				}) : null
			}, L = ({
				userName: e
			}) => l.a.createElement("p", null, M._("Accept to chat with {userName}{restText}", [M._param("userName", l.a.createElement("span", {
				className: I.a.BoldText
			}, e)), M._param("restText", l.a.createElement("span", null, ". If you ignore, the chat request will be removed, and we won’t let the sender know."))], {
				hk: "3FVxLq"
			})), Q = ({
				userName: e,
				isQuickActionBlock: t
			}) => t ? M._("Are you sure you want to block {userName}", [M._param("userName", l.a.createElement("span", {
				className: I.a.BoldText
			}, ` ${e}?`))], {
				hk: "12VekN"
			}) : M._("Are you sure you want to mark this chat as spam? You will also block {userName}", [M._param("userName", l.a.createElement("span", {
				className: I.a.BoldText
			}, ` ${e}?`))], {
				hk: "1teJQL"
			}), U = ({
				channelId: e
			}) => {
				var t, a;
				const n = Object(o.d)(),
					[r, c] = Object(s.useState)(!1);
				Object(s.useEffect)(() => {
					c(!1)
				}, [e]);
				const i = Object(o.e)(t => Object(C.h)(t, e)),
					d = Object(o.e)(t => Object(E.d)(t, e)),
					x = Object(o.e)(t => Object(C.v)(t, e)),
					b = Object(o.e)(f.c),
					y = Object(o.e)(f.e),
					O = Object(s.useCallback)(() => {
						n(Object(m.y)(e)), n(Object(u.o)(e))
					}, [n, e]),
					v = Object(s.useCallback)(() => {
						d && (n(Object(m.C)(e, d)), n(Object(u.q)(e)))
					}, [n, e, d]),
					k = Object(s.useCallback)(() => {
						d && (n(Object(m.C)(e, d)), b && n(Object(u.p)()), y && n(Object(u.r)()))
					}, [n, e, d, b, y]),
					N = Object(s.useCallback)(() => {
						n(Object(m.P)(A.b.INVITED, e))
					}, [n, e]),
					j = Object(s.useMemo)(() => b ? M._("Block", null, {
						hk: "4CA4VX"
					}) : M._("Mark as spam", null, {
						hk: "3Iy1wd"
					}), [b]),
					g = Object(s.useMemo)(() => (null == i ? void 0 : i.type) === T.a.Direct, [i]),
					D = Object(s.useMemo)(() => g ? M._("Chat Request", null, {
						hk: "1sWJM0"
					}) : M._("Group invite", null, {
						hk: "JPFyz"
					}), [g]);
				return l.a.createElement(_.a, null, l.a.createElement(h.a, {
					channelId: e,
					title: D,
					showMenu: g
				}), l.a.createElement(p.b, {
					className: I.a.Scroller
				}, l.a.createElement(P, {
					channelInviter: null == i ? void 0 : i.inviter,
					channelMessages: x,
					inviterContact: d,
					channelId: null == i ? void 0 : i.channelId,
					channelType: null == i ? void 0 : i.type
				})), l.a.createElement("div", {
					className: I.a.OverlayControlBarWrapper
				}, r ? l.a.createElement(B.a, {
					className: I.a.OverlayControlBar,
					secondaryButtonText: M._("Nevermind", null, {
						hk: "30ppMU"
					}),
					primaryButtonText: j,
					primaryButtonAction: k,
					secondaryButtonAction: N
				}, l.a.createElement(Q, {
					userName: null === (t = null == i ? void 0 : i.inviter) || void 0 === t ? void 0 : t.name,
					isQuickActionBlock: b
				})) : l.a.createElement(B.a, {
					className: I.a.OverlayControlBar,
					secondaryButtonText: M._("Ignore", null, {
						hk: "1ws6QH"
					}),
					secondaryButtonAction: v,
					primaryButtonText: M._("Accept", null, {
						hk: "249yqF"
					}),
					primaryButtonAction: O,
					primaryButtonBlock: b || y,
					primaryButtonBlockText: j,
					primaryButtonBlockAction: () => c(!0)
				}, l.a.createElement(L, {
					userName: null === (a = null == i ? void 0 : i.inviter) || void 0 === a ? void 0 : a.name
				}))))
			};
			t.default = U
		},
		"./src/chat/controls/MediaObject/index.m.less": function(e, t, a) {
			e.exports = {
				MediaObject: "Q7TqGkVgPLQj2DDlAsN1q",
				mediaObject: "Q7TqGkVgPLQj2DDlAsN1q"
			}
		},
		"./src/chat/controls/OverlayControlBar/index.m.less": function(e, t, a) {
			e.exports = {
				Button: "jKsK0jQWRidPglQ7Czk8y",
				button: "jKsK0jQWRidPglQ7Czk8y",
				NoBorderPrimaryButton: "_2_xFtB6XsnUOGk0YPukDeu",
				noBorderPrimaryButton: "_2_xFtB6XsnUOGk0YPukDeu",
				OverlayControlBar: "_3GhQcGD7m0hf9mkUK6I1JG",
				overlayControlBar: "_3GhQcGD7m0hf9mkUK6I1JG",
				NoHeaderText: "_1KR6Li0ovE5q7gSH0Rl19G",
				noHeaderText: "_1KR6Li0ovE5q7gSH0Rl19G",
				ButtonsWrapper: "_2-kvEgGOQg3X-keFfUpUa",
				buttonsWrapper: "_2-kvEgGOQg3X-keFfUpUa",
				HeaderText: "_3kD8pfjcLZgRDsMewcOmc4",
				headerText: "_3kD8pfjcLZgRDsMewcOmc4"
			}
		},
		"./src/chat/controls/OverlayControlBar/index.tsx": function(e, t, a) {
			"use strict";
			var n = a("./node_modules/fbt/lib/FbtPublic.js"),
				r = a("./node_modules/react/index.js"),
				c = a.n(r),
				s = a("./node_modules/react-redux/es/index.js"),
				l = a("./node_modules/react-router-redux/es/index.js"),
				o = a("./src/config.ts"),
				i = a("./src/lib/classNames/index.ts"),
				m = a("./src/chat/controls/Button/index.tsx"),
				u = a("./src/chat/helpers/dom.ts"),
				d = a("./src/chat/controls/OverlayControlBar/index.m.less"),
				h = a.n(d);
			const p = Object(s.b)(void 0, e => ({
				onSubmit: () => {},
				onCancel: Object(u.b)(() => e(Object(l.a)()))
			}))(e => c.a.createElement("div", {
				className: Object(i.a)({
					[h.a.primary]: e.primaryButtonOnly,
					[h.a.NoHeaderText]: !e.children
				}, h.a.OverlayControlBar, e.className)
			}, e.children && c.a.createElement("span", {
				className: h.a.HeaderText
			}, e.children), c.a.createElement("div", {
				className: h.a.ButtonsWrapper
			}, e.primaryButtonBlock && c.a.createElement(m.a, {
				onClick: e.primaryButtonBlockAction || e.onCancel,
				className: Object(i.a)(h.a.Button, h.a.NoBorderPrimaryButton),
				secondary: !0,
				noBorder: !0
			}, e.primaryButtonBlockText || n.fbt._("Block", null, {
				hk: "4CA4VX"
			})), !e.primaryButtonOnly && (e.secondaryButtonCTLOptions ? c.a.createElement(m.a, {
				className: h.a.Button,
				href: `${o.a.redditHelpUrl}/en/categories/rules-reporting/suicide-response/what-do-i-do-if-someone-talks-about-seriously-hurting`,
				secondary: !0
			}, n.fbt._("Other Options", null, {
				hk: "1RadlV"
			})) : c.a.createElement(m.a, {
				className: h.a.Button,
				onClick: e.secondaryButtonAction || e.onCancel,
				primary: !!e.secondaryButtonOnly,
				secondary: !e.secondaryButtonOnly
			}, e.secondaryButtonText || n.fbt._("Cancel", null, {
				hk: "2TSLl5"
			}))), !e.secondaryButtonOnly && c.a.createElement(m.a, {
				className: h.a.Button,
				type: "submit",
				primary: !0,
				onClick: e.primaryButtonAction || e.onSubmit,
				disabled: e.primaryButtonDisabled
			}, e.primaryButtonText || n.fbt._("Submit", null, {
				hk: "4aU3dh"
			})))));
			p.displayName = "OverlayControlBar", t.a = p
		}
	}
]);
//# sourceMappingURL=https://www.redditstatic.com/desktop2x/OverlayChannelInvited.e93a33746882dc68a7a4.js.map