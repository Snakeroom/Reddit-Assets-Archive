// https://www.redditstatic.com/desktop2x/OverlayDirectsEmptyState.6a35ffe3952c3430c5ca.js
// Retrieved at 8/30/2022, 3:10:05 PM by Reddit Dataminer v1.0.0
(window.__LOADABLE_LOADED_CHUNKS__ = window.__LOADABLE_LOADED_CHUNKS__ || []).push([
	["OverlayDirectsEmptyState"], {
		"./src/chat/components/OverlayDirectsEmptyState/index.m.less": function(e, t, a) {
			e.exports = {
				OverlayContent: "_1q866gGcJPftLTxyLf0X3g",
				overlayContent: "_1q866gGcJPftLTxyLf0X3g",
				Image: "_1vp6IUbUAKft1309x-FLvY",
				image: "_1vp6IUbUAKft1309x-FLvY",
				Info: "_3ReB8hehAg-xasLSPknuTf",
				info: "_3ReB8hehAg-xasLSPknuTf",
				InfoV2: "_2pzVRiHBP_Ul43YDhPPRIS",
				infoV2: "_2pzVRiHBP_Ul43YDhPPRIS",
				Header: "_3Tai9WhmvPt75f5hVNehsd",
				header: "_3Tai9WhmvPt75f5hVNehsd",
				HeaderV2: "qT_GjX85abhTyDr0muPoz",
				headerV2: "qT_GjX85abhTyDr0muPoz",
				Text: "_2qqSe8MO2ASeWjo69rQv-U",
				text: "_2qqSe8MO2ASeWjo69rQv-U",
				ChatNew: "_1SRuFdbYqDdhQxmXq8hIVa",
				chatNew: "_1SRuFdbYqDdhQxmXq8hIVa",
				StartChatButton: "_1d-C0EOMgzliGHSkHvzKAi",
				startChatButton: "_1d-C0EOMgzliGHSkHvzKAi"
			}
		},
		"./src/chat/components/OverlayDirectsEmptyState/index.tsx": function(e, t, a) {
			"use strict";
			a.r(t);
			var n = a("./src/config.ts"),
				r = a("./node_modules/fbt/lib/FbtPublic.js"),
				s = a("./node_modules/react/index.js"),
				c = a.n(s),
				l = a("./node_modules/react-redux/es/index.js"),
				o = a("./node_modules/react-router-redux/es/index.js"),
				m = a("./src/chat/components/OverlayNav/index.tsx"),
				h = a("./src/chat/controls/Button/index.tsx"),
				i = a("./src/chat/controls/Overlay/index.tsx"),
				d = a("./src/chat/controls/OverlayControlBar/index.tsx"),
				u = a("./src/chat/helpers/urls/index.ts"),
				_ = a("./src/chat/icons/svgs/ChatNew/index.tsx"),
				v = a("./src/chat/models/Channel/index.ts"),
				x = a("./src/chat/selectors/channelsFilter.ts"),
				E = a("./src/chat/selectors/experiments.ts"),
				f = a("./src/chat/components/OverlayDirectsEmptyState/index.m.less"),
				p = a.n(f);
			const y = Object(l.b)(null, e => ({
					onCreateMessage: () => {
						const t = Object(u.getRedirectURL)(Object(u.channelUrl)("create"));
						return e(Object(o.b)(t))
					}
				})),
				b = e => c.a.createElement(i.a, {
					innerContent: !0
				}, c.a.createElement(m.a, {
					title: r.fbt._("Start chatting", null, {
						hk: "3B5dRm"
					})
				}), c.a.createElement("div", {
					className: p.a.OverlayContent
				}, c.a.createElement("img", {
					className: p.a.Image,
					src: `${n.a.assetPath}/img/chat/empty-hero.png`
				}), c.a.createElement("div", {
					className: p.a.Info
				}, c.a.createElement("h4", {
					className: p.a.Header
				}, r.fbt._("Start a direct chat", null, {
					hk: "4qVzlj"
				})), c.a.createElement("p", {
					className: p.a.Text
				}, r.fbt._("You can start a new direct chat with the button below or from someone's profile", null, {
					hk: "3wS0vs"
				})))), c.a.createElement(d.a, {
					primaryButtonText: r.fbt._("New Chat", null, {
						hk: "33WSw"
					}),
					primaryButtonAction: e.onCreateMessage,
					primaryButtonOnly: !0
				})),
				g = () => c.a.createElement(i.a, {
					innerContent: !0
				}, c.a.createElement(m.a, {
					title: "",
					withBorder: !0
				}), c.a.createElement("div", {
					className: p.a.OverlayContent
				}, c.a.createElement("img", {
					className: p.a.Image,
					src: `${n.a.assetPath}/img/chat/empty-hero.png`
				}), c.a.createElement("div", {
					className: p.a.InfoV2
				}, c.a.createElement("h4", {
					className: p.a.HeaderV2
				}, r.fbt._("Live chats live here", null, {
					hk: "1iKhTe"
				})), c.a.createElement("p", {
					className: p.a.Text
				}, r.fbt._("When a community or person you follow hosts a live chat, you'll find it here.", null, {
					hk: "1BB3ei"
				}))))),
				N = e => c.a.createElement(i.a, {
					innerContent: !0
				}, c.a.createElement(m.a, {
					title: "",
					withBorder: !0
				}), c.a.createElement("div", {
					className: p.a.OverlayContent
				}, c.a.createElement("img", {
					className: p.a.Image,
					src: `${n.a.assetPath}/img/chat/empty-hero.png`
				}), c.a.createElement("div", {
					className: p.a.InfoV2
				}, c.a.createElement("h4", {
					className: p.a.HeaderV2
				}, r.fbt._("Welcome to chat!", null, {
					hk: "1m6hd2"
				}), c.a.createElement("br", null), r.fbt._("Let's start a conversation", null, {
					hk: "1kocrz"
				})), c.a.createElement("p", {
					className: p.a.Text
				}, r.fbt._("Invite other redditors or share a link with people you know.", null, {
					hk: "47BjwW"
				})), c.a.createElement(h.a, {
					onClick: e.onCreateMessage,
					className: p.a.StartChatButton,
					primary: !0
				}, c.a.createElement(_.a, {
					className: p.a.ChatNew
				}), r.fbt._("Start Chatting", null, {
					hk: "2xwnNZ"
				})))));
			t.default = y(e => {
				const t = Object(l.e)(x.a);
				return Object(l.e)(E.q) ? t === v.f.Live ? c.a.createElement(g, null) : c.a.createElement(N, e) : c.a.createElement(b, e)
			})
		}
	}
]);
//# sourceMappingURL=https://www.redditstatic.com/desktop2x/OverlayDirectsEmptyState.6a35ffe3952c3430c5ca.js.map