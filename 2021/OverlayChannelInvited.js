// https://www.redditstatic.com/desktop2x/OverlayChannelInvited.32f8ace25d0ca14dc569.js
// Retrieved at 6/8/2021, 2:40:05 PM by Reddit Dataminer v1.0.0
(window.__LOADABLE_LOADED_CHUNKS__ = window.__LOADABLE_LOADED_CHUNKS__ || []).push([
	["OverlayChannelInvited"], {
		"./src/chat/components/OverlayChannelInvited/index.m.less": function(e, t, n) {
			e.exports = {
				Container: "_2_usm-6VxbuOWiTnRHrW6_",
				container: "_2_usm-6VxbuOWiTnRHrW6_",
				TitleContainer: "_286hA91kPPTG16FrntDjnI",
				titleContainer: "_286hA91kPPTG16FrntDjnI",
				NSFWIcon: "KMxUr4-PgnXZGf5PDaXpK",
				nsfwIcon: "KMxUr4-PgnXZGf5PDaXpK",
				UserPic: "_1VfnsRlasisMwqxtizmNQG",
				userPic: "_1VfnsRlasisMwqxtizmNQG",
				WarningTextNSFW: "_2J7sY3CGM_vmQmlMoGfZrh",
				warningTextNsfw: "_2J7sY3CGM_vmQmlMoGfZrh",
				Text: "_22QVrPPpZBzynTY8RED1SZ",
				text: "_22QVrPPpZBzynTY8RED1SZ",
				MediaObject: "_2P47kg53Xxq3BQhzoaYl9a",
				mediaObject: "_2P47kg53Xxq3BQhzoaYl9a",
				LightText: "_2buWE0oBQ93N4BIt3Klp0T",
				lightText: "_2buWE0oBQ93N4BIt3Klp0T",
				LightTextSmall: "_2EZY5lK_rrQ9EWQLO-bTOa",
				lightTextSmall: "_2EZY5lK_rrQ9EWQLO-bTOa",
				Warning: "_1qjZD8w4dikSOteKrNjSx8",
				warning: "_1qjZD8w4dikSOteKrNjSx8",
				MessageItemBubble: "_159DMqa2u910mCXNaj7psO",
				messageItemBubble: "_159DMqa2u910mCXNaj7psO",
				MemberListHeader: "_2Okgg_b1qun6jCu2zoGgIr",
				memberListHeader: "_2Okgg_b1qun6jCu2zoGgIr",
				count: "_3OeY3h8ewj9TQNqMGBjQAy"
			}
		},
		"./src/chat/components/OverlayChannelInvited/index.tsx": function(e, t, n) {
			"use strict";
			n.r(t), n.d(t, "OverlayChannelInvited", (function() {
				return J
			}));
			var a = n("./src/config.ts"),
				s = n("./node_modules/fbt/lib/FbtPublic.js"),
				r = n("./node_modules/lodash/sortBy.js"),
				c = n.n(r),
				l = n("./node_modules/react/index.js"),
				o = n.n(l),
				i = n("./node_modules/react-redux/es/index.js"),
				d = n("./src/lib/classNames/index.ts"),
				h = n("./src/lib/lessComponent.tsx"),
				u = n("./src/lib/opener/index.ts"),
				m = n("./src/lib/timeAgo/index.ts"),
				p = n("./src/chat/actions/channel.ts"),
				b = n("./src/chat/actions/message/index.ts"),
				_ = n("./src/chat/actions/tracking.ts"),
				x = n("./src/chat/components/ChatMemberList/index.tsx"),
				y = n("./src/chat/components/Message/Bubble.tsx"),
				C = n("./src/chat/components/OverlayNav/index.tsx"),
				O = n("./src/chat/components/Scroller/index.tsx"),
				f = n("./src/chat/controls/MediaObject/index.m.less"),
				g = n.n(f);
			const v = h.a.wrapped(e => {
				const [t, n, a] = o.a.Children.toArray(e.children);
				return o.a.createElement("div", {
					className: e.className
				}, t, n, a)
			}, "MediaObject", g.a);
			var j = n("./src/chat/controls/Overlay/index.tsx"),
				B = n("./src/chat/controls/OverlayControlBar/index.tsx"),
				k = n("./src/chat/controls/Title/index.tsx"),
				E = n("./src/chat/helpers/chatSelector.ts"),
				M = n("./src/chat/icons/Nsfw/index.tsx"),
				N = n("./src/chat/icons/Userpic/index.tsx"),
				I = n("./src/chat/models/Channel/index.ts"),
				w = n("./src/chat/selectors/app.ts"),
				T = n("./src/chat/selectors/channels.ts"),
				D = n("./src/chat/selectors/contacts.ts"),
				P = n("./src/chat/selectors/user.ts"),
				q = n("./src/chat/components/OverlayChannelInvited/index.m.less"),
				A = n.n(q);
			const L = "OverlayNavTooltip--ChatRequest",
				R = h.a.div("Container", A.a),
				Q = h.a.div("TitleContainer", A.a),
				S = h.a.wrapped(M.a, "NSFWIcon", A.a),
				W = h.a.wrapped(N.a, "UserPic", A.a),
				G = h.a.span("WarningTextNSFW", A.a),
				U = h.a.p("Text", A.a),
				K = h.a.wrapped(v, "MediaObject", A.a),
				F = h.a.span("LightText", A.a),
				H = h.a.wrapped(e => o.a.createElement("span", {
					className: e.className
				}, e.children), "LightTextSmall", A.a);
			H.displayName = "LightTextSmall";
			const X = h.a.b("Warning", A.a),
				Z = h.a.wrapped(y.a, "MessageItemBubble", A.a),
				z = h.a.wrapped(e => o.a.createElement("p", {
					className: Object(d.a)(e.className, {
						[A.a.count]: !!e.count
					})
				}, e.children), "MemberListHeader", A.a),
				V = Object(E.a)({
					currentUserId: P.a,
					channel: e => Object(T.j)(e),
					inviterContact: (e, t) => {
						const n = Object(T.g)(e, t);
						return n && Object(D.d)(e, n)
					},
					channelMessages: e => Object(T.u)(e),
					isChatEmbedded: e => Object(w.a)(e)
				}),
				Y = Object(i.b)(V, e => ({
					onAcceptChannelRequest: t => {
						e(Object(p.y)(t)), e(Object(_.o)(t))
					},
					onDeclineChannelRequest: t => {
						e(Object(p.C)(t)), e(Object(_.p)(t))
					},
					getPreviousMessages: b.t
				}), (e, t, n) => ({
					...e,
					...t,
					...n,
					hasBlockedUsers: () => {
						const {
							channel: t
						} = e;
						return !(!t || !t.members.some(e => e.isBlockedByMe))
					}
				}));
			class J extends o.a.Component {
				constructor(e) {
					super(e), this.renderContent = this.renderContent.bind(this), this.renderUserInfo = this.renderUserInfo.bind(this), this.renderPreviewMessages = this.renderPreviewMessages.bind(this), this.onDeclineChannelRequest = this.onDeclineChannelRequest.bind(this), this.onAcceptChannelRequest = this.onAcceptChannelRequest.bind(this)
				}
				UNSAFE_componentWillReceiveProps(e) {
					const {
						channel: t,
						getPreviousMessages: n
					} = this.props;
					if (t && e.channel) {
						const a = e.channel.channelId === t.channelId;
						t.type === I.a.Direct && !t.firstMessageId && !t.fetchingFirstMessage && a && n()
					}
				}
				onDeclineChannelRequest(e) {
					this.props.onDeclineChannelRequest(e)
				}
				onAcceptChannelRequest() {
					this.props.onAcceptChannelRequest(this.props.channelId)
				}
				renderUserInfo() {
					const {
						inviterContact: e
					} = this.props;
					if (e) {
						const {
							linkKarma: t,
							created: n
						} = e, a = s.fbt._("Redditor since {amount of time}", [s.fbt._param("amount of time", Object(m.a)(n))], {
							hk: "37XXLN"
						}), r = s.fbt._({
							"*": "{karma count} karma",
							_1: "1 karma"
						}, [s.fbt._plural(t, "karma count")], {
							hk: "4uraW2"
						});
						return o.a.createElement(H, null, a, " • ", r)
					}
				}
				renderPreviewMessages() {
					if (this.props.channel && this.props.channelMessages && this.props.channelMessages.length) {
						const {
							isChatEmbedded: e
						} = this.props, t = c()([...this.props.channelMessages], "createdAt");
						return o.a.createElement(R, null, o.a.createElement(F, null, s.fbt._("Preview of this chat", null, {
							hk: "42xxX4"
						})), t.map(t => o.a.createElement(Z, {
							key: t.createdAt,
							message: t,
							inPreview: !0,
							fromCurrentUser: !1,
							withButton: !0,
							isChatEmbedded: e
						})))
					}
				}
				renderBlockedUserHeader() {
					return this.props.hasBlockedUsers() && o.a.createElement(U, null, o.a.createElement(X, null, s.fbt._("Heads up: you previously blocked at least one person in this group.", null, {
						hk: "1vpXV1"
					})), s.fbt._("If you join, you'll be able to see any messages they send. They'll remain blocked on the rest of Reddit.", null, {
						hk: "1vGIVA"
					}))
				}
				renderMemberListHeader(e, t) {
					const n = e.length,
						a = t || s.fbt._("group", null, {
							hk: "1ixukL"
						});
					return o.a.createElement(z, {
						count: n
					}, s.fbt._({
						"*": "{number} Redditors in {channelName}",
						_1: "1 Redditor in {channelName}"
					}, [s.fbt._plural(n, "number"), s.fbt._param("channelName", a)], {
						hk: "3M9s4k"
					}))
				}
				renderMembersList() {
					const {
						channel: e,
						channelId: t,
						currentUserId: n
					} = this.props;
					if (e && e.members.length) {
						const {
							members: a,
							name: s
						} = e, r = a.filter(({
							id: e
						}) => e !== n);
						return o.a.createElement(o.a.Fragment, null, this.renderBlockedUserHeader(), this.renderMemberListHeader(r, s), o.a.createElement(x.a, {
							channelId: t,
							members: r,
							modIndicator: !1,
							useNSFWIcons: !0
						}))
					}
					return null
				}
				renderContent() {
					const {
						inviterContact: e,
						channel: t
					} = this.props, n = e && !!e.isNSFW;
					if (t && t.inviter) return o.a.createElement("div", null, o.a.createElement("a", {
						target: u.c.BLANK,
						rel: u.b,
						href: `${a.a.redditUrl}/user/${t.inviter.name}`
					}, o.a.createElement(K, null, n ? o.a.createElement(S, null) : o.a.createElement(W, {
						userId: t.inviter.id
					}), o.a.createElement(Q, null, o.a.createElement(k.a, {
						bold: !0
					}, t.inviter.name), n && o.a.createElement(G, null, s.fbt._("NSFW", null, {
						hk: "3rI4EF"
					}))), this.renderUserInfo())), o.a.createElement(U, null, s.fbt._("Accept their request if you'd like to continue the conversation. We won't notify them if you decline.", null, {
						hk: "1wbHBD"
					})), t && t.type === I.a.Group ? this.renderMembersList() : this.renderPreviewMessages())
				}
				render() {
					const {
						props: {
							channel: e,
							channelId: t
						},
						onDeclineChannelRequest: n,
						onAcceptChannelRequest: a
					} = this, r = e && e.type === I.a.Direct, c = r ? s.fbt._("Chat Request", null, {
						hk: "1sWJM0"
					}) : s.fbt._("Group invite", null, {
						hk: "JPFyz"
					});
					return o.a.createElement(j.a, null, o.a.createElement(C.a, {
						channelId: t,
						title: c,
						showMenu: r,
						dropdownId: L
					}), o.a.createElement(O.b, null, this.renderContent()), o.a.createElement(B.a, {
						secondaryButtonText: s.fbt._("Decline", null, {
							hk: "3rdClY"
						}),
						secondaryButtonAction: () => n(t),
						primaryButtonText: s.fbt._("Accept", null, {
							hk: "249yqF"
						}),
						primaryButtonAction: a
					}))
				}
			}
			J.displayName = "OverlayChannelInvited";
			t.default = Y(J)
		},
		"./src/chat/controls/MediaObject/index.m.less": function(e, t, n) {
			e.exports = {
				MediaObject: "Q7TqGkVgPLQj2DDlAsN1q",
				mediaObject: "Q7TqGkVgPLQj2DDlAsN1q"
			}
		},
		"./src/chat/controls/OverlayControlBar/index.m.less": function(e, t, n) {
			e.exports = {
				Button: "jKsK0jQWRidPglQ7Czk8y",
				button: "jKsK0jQWRidPglQ7Czk8y",
				OverlayControlBar: "_3GhQcGD7m0hf9mkUK6I1JG",
				overlayControlBar: "_3GhQcGD7m0hf9mkUK6I1JG",
				primary: "_3fM86Pr7r-ObXeea2Dms_o"
			}
		},
		"./src/chat/controls/OverlayControlBar/index.tsx": function(e, t, n) {
			"use strict";
			var a = n("./node_modules/fbt/lib/FbtPublic.js"),
				s = n("./node_modules/react/index.js"),
				r = n.n(s),
				c = n("./node_modules/react-redux/es/index.js"),
				l = n("./node_modules/react-router-redux/es/index.js"),
				o = n("./src/lib/classNames/index.ts"),
				i = n("./src/lib/lessComponent.tsx"),
				d = n("./src/chat/controls/Button/index.tsx"),
				h = n("./src/chat/helpers/dom.ts"),
				u = n("./src/chat/controls/OverlayControlBar/index.m.less"),
				m = n.n(u);
			const p = i.a.wrapped(d.a, "Button", m.a),
				b = Object(c.b)(void 0, e => ({
					onSubmit: () => {},
					onCancel: Object(h.b)(() => e(Object(l.a)()))
				})),
				_ = i.a.div("OverlayControlBar", m.a),
				x = b(e => r.a.createElement(_, {
					className: Object(o.a)({
						[m.a.primary]: e.primaryButtonOnly
					}, e.className)
				}, !e.primaryButtonOnly && (e.secondaryButtonCTLOptions ? r.a.createElement(p, {
					href: "https://www.reddithelp.com/en/categories/rules-reporting/suicide-response/what-do-i-do-if-someone-talks-about-seriously-hurting",
					secondary: !0
				}, a.fbt._("Other Options", null, {
					hk: "1RadlV"
				})) : r.a.createElement(p, {
					onClick: e.secondaryButtonAction || e.onCancel,
					primary: !!e.secondaryButtonOnly,
					secondary: !e.secondaryButtonOnly
				}, e.secondaryButtonText || a.fbt._("Cancel", null, {
					hk: "2TSLl5"
				}))), !e.secondaryButtonOnly && r.a.createElement(p, {
					type: "submit",
					primary: !0,
					onClick: e.primaryButtonAction || e.onSubmit,
					disabled: e.primaryButtonDisabled
				}, e.primaryButtonText || a.fbt._("Submit", null, {
					hk: "2Iwjdv"
				}))));
			x.displayName = "OverlayControlBar", t.a = x
		}
	}
]);
//# sourceMappingURL=https://www.redditstatic.com/desktop2x/OverlayChannelInvited.32f8ace25d0ca14dc569.js.map