// https://www.redditstatic.com/desktop2x/OverlayDirectsEmptyState.b0aa225b06b7d2fb0bd4.js
// Retrieved at 10/18/2022, 1:10:05 PM by Reddit Dataminer v1.0.0
(window.__LOADABLE_LOADED_CHUNKS__ = window.__LOADABLE_LOADED_CHUNKS__ || []).push([
	["OverlayDirectsEmptyState"], {
		"./src/chat/actions/navigate.ts": function(e, t, a) {
			"use strict";
			a.d(t, "a", (function() {
				return r
			})), a.d(t, "b", (function() {
				return c
			}));
			var n = a("./src/lib/makeActionCreator/index.ts");
			const r = "NAVIGATE__HOST_APP_NAVIGATE",
				c = Object(n.a)(r)
		},
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
				LiveChatIcon: "_26ZLV4kgrLDMIX_u4yA0qE",
				liveChatIcon: "_26ZLV4kgrLDMIX_u4yA0qE",
				StartChatButton: "_1d-C0EOMgzliGHSkHvzKAi",
				startChatButton: "_1d-C0EOMgzliGHSkHvzKAi",
				HappeningNowInfo: "_20LXTV5oPsoGYpCzXdkJ3q",
				happeningNowInfo: "_20LXTV5oPsoGYpCzXdkJ3q",
				HappeningNowHeader: "mu5h7oDM_7BfeigpJrtHn",
				happeningNowHeader: "mu5h7oDM_7BfeigpJrtHn",
				HappeningNowSubText: "_2bgWjwbgQ-wWGTywGOsVeO",
				happeningNowSubText: "_2bgWjwbgQ-wWGTywGOsVeO",
				HappeningNowNavigateButton: "_2bc4emS1-T69MdwKk90tXz",
				happeningNowNavigateButton: "_2bc4emS1-T69MdwKk90tXz"
			}
		},
		"./src/chat/components/OverlayDirectsEmptyState/index.tsx": function(e, t, a) {
			"use strict";
			a.r(t);
			var n = a("./src/config.ts"),
				r = a("./node_modules/fbt/lib/FbtPublic.js"),
				c = a("./node_modules/react/index.js"),
				s = a.n(c),
				l = a("./node_modules/react-redux/es/index.js"),
				o = a("./node_modules/react-router-redux/es/index.js"),
				i = a("./src/chat/actions/navigate.ts"),
				m = a("./src/chat/actions/tracking.ts"),
				h = a("./src/chat/components/OverlayNav/index.tsx"),
				C = a("./src/chat/controls/Button/index.tsx"),
				p = a("./src/chat/controls/Overlay/index.tsx"),
				g = a("./src/chat/controls/OverlayControlBar/index.tsx"),
				d = a("./src/chat/helpers/urls/index.ts"),
				u = a("./src/chat/icons/svgs/ChatNew/index.tsx");

			function _() {
				return (_ = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var a = arguments[t];
						for (var n in a) Object.prototype.hasOwnProperty.call(a, n) && (e[n] = a[n])
					}
					return e
				}).apply(this, arguments)
			}
			var v = e => s.a.createElement("svg", _({
					fill: "none",
					xmlns: "http://www.w3.org/2000/svg"
				}, e), s.a.createElement("path", {
					d: "M13.9246 23.8452C15.4799 23.59 16.9697 23.0309 18.309 22.1999C19.6482 21.3689 20.8107 20.2823 21.73 19.002C22.6493 17.7217 23.3075 16.2729 23.6669 14.7383C24.0263 13.2036 24.08 11.6132 23.8248 10.0578C23.5696 8.50247 23.0106 7.01259 22.1797 5.67327C21.3487 4.33395 20.2621 3.17142 18.9819 2.25205C17.7017 1.33269 16.2529 0.674491 14.7184 0.315046C13.1838 -0.044399 11.5935 -0.098054 10.0382 0.157144C7.55352 0.576366 5.26282 1.76411 3.4884 3.55326C1.71398 5.3424 0.545155 7.6429 0.146378 10.131C-0.282283 12.8149 0.223912 15.5646 1.58023 17.9199L0.0995829 22.8132C0.0541364 22.9633 0.0499876 23.1229 0.0875731 23.2751C0.125159 23.4274 0.203089 23.5667 0.313162 23.6784C0.422666 23.7919 0.561252 23.8733 0.713806 23.9135C0.86636 23.9537 1.02702 23.9512 1.17828 23.9064L6.17818 22.4748C7.95131 23.4745 9.9525 23.9994 11.988 23.9988C12.6366 23.9986 13.2841 23.9473 13.9246 23.8452ZM1.86701 22.1484L3.20847 17.7195L3.03449 17.4315C1.73639 15.3184 1.23755 12.8104 1.62823 10.3614C1.97648 8.18587 2.99791 6.17422 4.54887 4.6094C6.09983 3.04459 8.10228 2.00536 10.2746 1.63787C11.64 1.40316 13.0383 1.44094 14.3891 1.74902C15.7398 2.05711 17.0163 2.62941 18.1449 3.43296C19.2735 4.23651 20.232 5.25543 20.9652 6.43104C21.6983 7.60664 22.1916 8.91569 22.4167 10.2828C22.6418 11.6499 22.5942 13.048 22.2766 14.3966C21.9591 15.7452 21.3778 17.0177 20.5664 18.1407C19.755 19.2637 18.7294 20.215 17.5487 20.9399C16.368 21.6648 15.0556 22.149 13.687 22.3644C11.2595 22.7626 8.7695 22.2872 6.65933 21.0229L6.38095 20.8573L1.86701 22.1484ZM19.1981 11.9994C19.1981 10.5754 18.7758 9.18342 17.9848 7.99945C17.1937 6.81547 16.0693 5.89268 14.7538 5.34775C13.4383 4.80283 11.9908 4.66025 10.5943 4.93805C9.19776 5.21585 7.91497 5.90155 6.90813 6.90844C5.9013 7.91533 5.21563 9.19818 4.93785 10.5948C4.66006 11.9914 4.80263 13.439 5.34753 14.7545C5.89242 16.0701 6.81517 17.1945 7.99909 17.9856C9.183 18.7767 10.5749 19.199 11.9988 19.199C13.9076 19.1971 15.7376 18.4379 17.0873 17.0882C18.4371 15.7384 19.1962 13.9082 19.1981 11.9994ZM17.6982 11.9994C17.6982 13.1266 17.364 14.2286 16.7377 15.1659C16.1114 16.1033 15.2213 16.8338 14.1799 17.2652C13.1384 17.6966 11.9925 17.8095 10.8869 17.5895C9.78131 17.3696 8.76577 16.8268 7.96869 16.0297C7.17161 15.2325 6.62879 14.2169 6.40888 13.1113C6.18896 12.0057 6.30183 10.8597 6.73321 9.81817C7.16458 8.77668 7.89509 7.88651 8.83236 7.26021C9.76963 6.63392 10.8716 6.29964 11.9988 6.29964C13.51 6.30122 14.9589 6.9022 16.0276 7.97073C17.0963 9.03925 17.6975 10.4881 17.6994 11.9994H17.6982ZM15.5984 11.9994C15.5984 11.2874 15.3873 10.5914 14.9918 9.9994C14.5963 9.40741 14.0341 8.94601 13.3763 8.67355C12.7186 8.40109 11.9948 8.3298 11.2965 8.4687C10.5983 8.6076 9.95688 8.95045 9.45346 9.45389C8.95004 9.95734 8.60721 10.5988 8.46832 11.2971C8.32943 11.9954 8.40071 12.7192 8.67316 13.3769C8.94561 14.0347 9.40698 14.5969 9.99894 14.9925C10.5909 15.388 11.2869 15.5992 11.9988 15.5992C12.9535 15.5992 13.8691 15.2199 14.5441 14.5448C15.2192 13.8697 15.5984 12.9541 15.5984 11.9994ZM14.0986 11.9994C14.0986 12.4147 13.9754 12.8207 13.7447 13.166C13.514 13.5113 13.186 13.7805 12.8023 13.9394C12.4187 14.0983 11.9965 14.1399 11.5891 14.0589C11.1818 13.9779 10.8077 13.7779 10.514 13.4842C10.2204 13.1905 10.0204 12.8164 9.93935 12.409C9.85833 12.0017 9.89991 11.5795 10.0588 11.1958C10.2178 10.8121 10.4869 10.4841 10.8322 10.2534C11.1775 10.0226 11.5835 9.89946 11.9988 9.89946C12.5557 9.89977 13.0897 10.1211 13.4836 10.5148C13.8776 10.9085 14.0991 11.4424 14.0998 11.9994H14.0986Z",
					fill: "white"
				})),
				w = a("./src/chat/models/Channel/index.ts"),
				N = a("./src/chat/selectors/channelsFilter.ts"),
				b = a("./src/chat/selectors/experiments.ts"),
				E = a("./src/chat/components/OverlayDirectsEmptyState/index.m.less"),
				f = a.n(E);
			const x = Object(l.b)(null, e => ({
					onCreateMessage: () => {
						e(Object(m.F)());
						const t = Object(d.getRedirectURL)(Object(d.channelUrl)("create"));
						return e(Object(o.b)(t))
					},
					onNavigateHappeningNowPage: () => {
						e(Object(m.p)()), e(Object(i.b)({
							path: "/now"
						}))
					}
				})),
				y = e => s.a.createElement(p.a, {
					innerContent: !0
				}, s.a.createElement(h.a, {
					title: r.fbt._("Start chatting", null, {
						hk: "3B5dRm"
					})
				}), s.a.createElement("div", {
					className: f.a.OverlayContent
				}, s.a.createElement("img", {
					className: f.a.Image,
					src: `${n.a.assetPath}/img/chat/empty-hero.png`
				}), s.a.createElement("div", {
					className: f.a.Info
				}, s.a.createElement("h4", {
					className: f.a.Header
				}, r.fbt._("Start a direct chat", null, {
					hk: "4qVzlj"
				})), s.a.createElement("p", {
					className: f.a.Text
				}, r.fbt._("You can start a new direct chat with the button below or from someone's profile", null, {
					hk: "3wS0vs"
				})))), s.a.createElement(g.a, {
					primaryButtonText: r.fbt._("New Chat", null, {
						hk: "33WSw"
					}),
					primaryButtonAction: e.onCreateMessage,
					primaryButtonOnly: !0
				})),
				O = () => s.a.createElement(p.a, {
					innerContent: !0
				}, s.a.createElement(h.a, {
					title: "",
					withBorder: !0
				}), s.a.createElement("div", {
					className: f.a.OverlayContent
				}, s.a.createElement("img", {
					className: f.a.Image,
					src: `${n.a.assetPath}/img/chat/empty-hero.png`
				}), s.a.createElement("div", {
					className: f.a.InfoV2
				}, s.a.createElement("h4", {
					className: f.a.HeaderV2
				}, r.fbt._("Live chats live here", null, {
					hk: "1iKhTe"
				})), s.a.createElement("p", {
					className: f.a.Text
				}, r.fbt._("When a community or person you follow hosts a live chat, you'll find it here.", null, {
					hk: "1BB3ei"
				}))))),
				k = e => s.a.createElement(p.a, {
					innerContent: !0
				}, s.a.createElement(h.a, {
					title: "",
					withBorder: !0
				}), s.a.createElement("div", {
					className: f.a.OverlayContent
				}, s.a.createElement("img", {
					className: f.a.Image,
					src: `${n.a.assetPath}/img/chat/empty-hero.png`
				}), s.a.createElement("div", {
					className: f.a.InfoV2
				}, s.a.createElement("h4", {
					className: f.a.HeaderV2
				}, r.fbt._("Welcome to chat!", null, {
					hk: "1m6hd2"
				}), s.a.createElement("br", null), r.fbt._("Let's start a conversation", null, {
					hk: "1kocrz"
				})), s.a.createElement("p", {
					className: f.a.Text
				}, r.fbt._("Invite other redditors or share a link with people you know.", null, {
					hk: "47BjwW"
				})), s.a.createElement(C.a, {
					onClick: e.onCreateMessage,
					className: f.a.StartChatButton,
					primary: !0
				}, s.a.createElement(u.a, {
					className: f.a.ChatNew
				}), r.fbt._("Start Chatting", null, {
					hk: "2xwnNZ"
				}))))),
				L = e => s.a.createElement(p.a, {
					innerContent: !0
				}, s.a.createElement(h.a, {
					title: "",
					withBorder: !0
				}), s.a.createElement("div", {
					className: f.a.OverlayContent
				}, s.a.createElement("img", {
					className: f.a.Image,
					src: `${n.a.assetPath}/img/chat/empty-hero.png`
				}), s.a.createElement("div", {
					className: f.a.HappeningNowInfo
				}, s.a.createElement("h4", {
					className: f.a.HappeningNowHeader
				}, r.fbt._("Welcome to chat!", null, {
					hk: "1m6hd2"
				})), s.a.createElement("p", {
					className: f.a.HappeningNowSubText
				}, r.fbt._("Check out what people are talking about now to join the conversation.", null, {
					hk: "3Ia7T6"
				}))), s.a.createElement(C.a, {
					onClick: e.onNavigateHappeningNowPage,
					className: f.a.HappeningNowNavigateButton,
					primary: !0
				}, s.a.createElement(v, {
					className: f.a.LiveChatIcon
				}), r.fbt._("See what’s happening now", null, {
					hk: "w5DOW"
				}))));
			t.default = x(e => {
				const t = Object(l.e)(N.a),
					a = Object(l.e)(b.s),
					n = Object(l.e)(b.l);
				return a ? n ? s.a.createElement(L, e) : t === w.g.Live ? s.a.createElement(O, null) : s.a.createElement(k, e) : s.a.createElement(y, e)
			})
		}
	}
]);
//# sourceMappingURL=https://www.redditstatic.com/desktop2x/OverlayDirectsEmptyState.b0aa225b06b7d2fb0bd4.js.map