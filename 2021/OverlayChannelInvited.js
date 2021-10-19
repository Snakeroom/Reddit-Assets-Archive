// https://www.redditstatic.com/desktop2x/OverlayChannelInvited.d3aa2523ea774d388b8e.js
// Retrieved at 10/19/2021, 5:20:10 PM by Reddit Dataminer v1.0.0
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
				return D
			})), a.d(t, "Content", (function() {
				return L
			})), a.d(t, "OverlayChannelInvited", (function() {
				return W
			}));
			var n = a("./src/config.ts"),
				c = a("./node_modules/lodash/sortBy.js"),
				r = a.n(c),
				s = a("./node_modules/react/index.js"),
				l = a.n(s),
				o = a("./node_modules/react-redux/es/index.js"),
				i = a("./src/lib/opener/index.ts"),
				m = a("./src/chat/actions/channel.ts"),
				u = a("./src/chat/actions/tracking.ts"),
				d = a("./src/chat/components/MessageList/Messages/index.tsx"),
				h = a("./src/chat/components/OverlayNav/index.tsx"),
				x = a("./src/chat/components/Scroller/index.tsx"),
				_ = a("./src/lib/lessComponent.tsx"),
				v = a("./src/chat/controls/MediaObject/index.m.less"),
				b = a.n(v);
			const O = _.a.wrapped(e => {
				const [t, a, n] = l.a.Children.toArray(e.children);
				return l.a.createElement("div", {
					className: e.className
				}, t, a, n)
			}, "MediaObject", b.a);
			var p = a("./src/chat/controls/Overlay/index.tsx"),
				N = a("./src/chat/controls/OverlayControlBar/index.tsx"),
				j = a("./src/chat/controls/Title/index.tsx"),
				k = a("./src/chat/helpers/time/index.tsx"),
				T = a("./src/chat/icons/Nsfw/index.tsx"),
				y = a("./src/chat/icons/Userpic/index.tsx"),
				E = a("./src/chat/models/Channel/index.ts"),
				B = a("./src/chat/selectors/channels.ts"),
				C = a("./src/chat/selectors/contacts.ts"),
				f = a("./src/chat/selectors/experiments.ts"),
				A = a("./src/chat/components/OverlayChannelInvited/index.m.less"),
				I = a.n(A),
				M = a("./src/chat/constants/channels.ts");
			const {
				fbt: g
			} = a("./node_modules/fbt/lib/FbtPublic.js"), w = ({
				children: e
			}) => l.a.createElement("span", {
				className: I.a.LightTextSmall
			}, e), D = ({
				inviterContact: e
			}) => {
				if (!e) return null;
				const {
					totalKarma: t = 0,
					created: a
				} = e, n = g._("Redditor since {amount of time}", [g._param("amount of time", Object(k.a)(a))], {
					hk: "37XXLN"
				}), c = g._({
					"*": "{karma count} karma",
					_1: "1 karma"
				}, [g._plural(t, "karma count")], {
					hk: "4uraW2"
				});
				return l.a.createElement(w, null, n, " • ", c)
			}, L = ({
				channelInviter: e,
				inviterContact: t,
				channelMessages: a,
				channelType: c,
				channelId: r
			}) => {
				const s = t && !!t.isNSFW;
				return e ? l.a.createElement(l.a.Fragment, null, l.a.createElement("a", {
					target: i.d.BLANK,
					rel: i.c,
					href: `${n.a.redditUrl}/user/${e.name}`
				}, l.a.createElement(O, {
					className: I.a.MediaObject
				}, s ? l.a.createElement(T.a, {
					className: I.a.NSFWIcon
				}) : l.a.createElement(y.a, {
					className: I.a.UserPic,
					userId: e.id
				}), l.a.createElement("div", {
					className: I.a.TitleContainer
				}, l.a.createElement(j.a, {
					className: I.a.Title,
					bold: !0
				}, e.name), s && l.a.createElement("span", {
					className: I.a.WarningTextNSFW
				}, g._("NSFW", null, {
					hk: "3rI4EF"
				}))), l.a.createElement(D, {
					inviterContact: t
				}))), void 0 !== c && r && l.a.createElement(P, {
					channelType: c,
					channelMessages: a
				}), l.a.createElement("div", {
					className: I.a.Container
				})) : null
			}, P = ({
				channelType: e,
				channelMessages: t
			}) => {
				const a = r()([...t], "createdAt");
				return t && t.length ? l.a.createElement(d.a, {
					channelType: e,
					messageList: a,
					inPreview: !0
				}) : null
			}, Q = ({
				userName: e
			}) => l.a.createElement("p", null, g._("Accept to chat with {userName}{restText}", [g._param("userName", l.a.createElement("span", {
				className: I.a.BoldText
			}, e)), g._param("restText", l.a.createElement("span", null, ". If you ignore, the chat request will be removed, and we won’t let the sender know."))], {
				hk: "3FVxLq"
			})), G = ({
				userName: e,
				isQuickActionBlock: t
			}) => t ? g._("Are you sure you want to block {userName}", [g._param("userName", l.a.createElement("span", {
				className: I.a.BoldText
			}, ` ${e}?`))], {
				hk: "12VekN"
			}) : g._("Are you sure you want to mark this chat as spam? You will also block {userName}", [g._param("userName", l.a.createElement("span", {
				className: I.a.BoldText
			}, ` ${e}?`))], {
				hk: "1teJQL"
			}), W = ({
				channelId: e
			}) => {
				var t, a;
				const n = Object(o.d)(),
					[c, r] = Object(s.useState)(!1);
				Object(s.useEffect)(() => {
					r(!1)
				}, [e]);
				const i = Object(o.e)(t => Object(B.i)(t, e)),
					d = Object(o.e)(t => Object(C.d)(t, e)),
					_ = Object(o.e)(t => Object(B.z)(t, e)),
					v = Object(o.e)(f.h),
					b = Object(o.e)(f.j),
					O = Object(s.useCallback)(() => {
						n(Object(m.y)(e)), n(Object(u.o)(e))
					}, [n, e]),
					j = Object(s.useCallback)(() => {
						d && (n(Object(m.B)(e, d, !0)), n(Object(u.q)(e)))
					}, [n, e, d]),
					k = Object(s.useCallback)(() => {
						d && (n(Object(m.B)(e, d)), v && n(Object(u.p)()), b && n(Object(u.r)(e, _)))
					}, [n, e, d, v, b, _]),
					T = Object(s.useCallback)(() => {
						n(Object(m.N)(M.b.INVITED, e))
					}, [n, e]),
					y = Object(s.useMemo)(() => v ? g._("Block", null, {
						hk: "4CA4VX"
					}) : g._("Mark as spam", null, {
						hk: "3Iy1wd"
					}), [v]),
					A = Object(s.useMemo)(() => (null == i ? void 0 : i.type) === E.a.Direct, [i]),
					w = Object(s.useMemo)(() => A ? g._("Chat Request", null, {
						hk: "1sWJM0"
					}) : g._("Group invite", null, {
						hk: "JPFyz"
					}), [A]);
				return l.a.createElement(p.a, null, l.a.createElement(h.a, {
					channelId: e,
					title: w,
					showMenu: A
				}), l.a.createElement(x.b, {
					className: I.a.Scroller
				}, l.a.createElement(L, {
					channelInviter: null == i ? void 0 : i.inviter,
					channelMessages: _,
					inviterContact: d,
					channelId: null == i ? void 0 : i.channelId,
					channelType: null == i ? void 0 : i.type
				})), l.a.createElement("div", {
					className: I.a.OverlayControlBarWrapper
				}, c ? l.a.createElement(N.a, {
					className: I.a.OverlayControlBar,
					secondaryButtonText: g._("Nevermind", null, {
						hk: "30ppMU"
					}),
					primaryButtonText: y,
					primaryButtonAction: k,
					secondaryButtonAction: T
				}, l.a.createElement(G, {
					userName: null === (t = null == i ? void 0 : i.inviter) || void 0 === t ? void 0 : t.name,
					isQuickActionBlock: v
				})) : l.a.createElement(N.a, {
					className: I.a.OverlayControlBar,
					secondaryButtonText: g._("Ignore", null, {
						hk: "1ws6QH"
					}),
					secondaryButtonAction: j,
					primaryButtonText: g._("Accept", null, {
						hk: "249yqF"
					}),
					primaryButtonAction: O,
					primaryButtonBlock: v || b,
					primaryButtonBlockText: y,
					primaryButtonBlockAction: () => r(!0)
				}, l.a.createElement(Q, {
					userName: null === (a = null == i ? void 0 : i.inviter) || void 0 === a ? void 0 : a.name
				}))))
			};
			t.default = W
		},
		"./src/chat/controls/MediaObject/index.m.less": function(e, t, a) {
			e.exports = {
				MediaObject: "Q7TqGkVgPLQj2DDlAsN1q",
				mediaObject: "Q7TqGkVgPLQj2DDlAsN1q"
			}
		}
	}
]);
//# sourceMappingURL=https://www.redditstatic.com/desktop2x/OverlayChannelInvited.d3aa2523ea774d388b8e.js.map