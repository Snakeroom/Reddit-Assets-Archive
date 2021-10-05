// https://www.redditstatic.com/desktop2x/OverlayChatMembers.9db68fd6cc76c5cb7ddd.js
// Retrieved at 10/5/2021, 7:40:04 PM by Reddit Dataminer v1.0.0
(window.__LOADABLE_LOADED_CHUNKS__ = window.__LOADABLE_LOADED_CHUNKS__ || []).push([
	["OverlayChatMembers"], {
		"./src/chat/components/OverlayChatMembers/index.m.less": function(e, t, r) {
			e.exports = {
				Scroller: "_2IqNvO7mqMEE5ZWWtZ2wz",
				scroller: "_2IqNvO7mqMEE5ZWWtZ2wz",
				LoadingIndicator: "_2AvW8S-YJtH3dTzD1erN9w",
				loadingIndicator: "_2AvW8S-YJtH3dTzD1erN9w"
			}
		},
		"./src/chat/components/OverlayChatMembers/index.tsx": function(e, t, r) {
			"use strict";
			r.r(t);
			var a = r("./node_modules/fbt/lib/FbtPublic.js"),
				n = r("./node_modules/react/index.js"),
				s = r.n(n),
				o = r("./node_modules/react-redux/es/index.js"),
				c = r("./src/lib/lessComponent.tsx"),
				l = r("./src/chat/actions/members.ts"),
				m = r("./src/chat/components/ChatMemberList/index.tsx"),
				i = r("./src/chat/components/Scroller/index.tsx"),
				d = r("./src/chat/constants/channels.ts"),
				u = r("./src/chat/controls/Overlay/index.tsx"),
				h = r("./src/chat/controls/OverlayControlBar/index.tsx"),
				b = r("./src/chat/controls/OverlayHeader/index.tsx"),
				p = r("./src/chat/helpers/chatSelector.ts"),
				y = r("./src/chat/selectors/channels.ts"),
				x = r("./src/chat/selectors/members.ts"),
				_ = r("./src/chat/components/OverlayChatMembers/index.m.less"),
				B = r.n(_);
			const O = c.a.wrapped(i.b, "Scroller", B.a),
				C = c.a.div("LoadingIndicator", B.a),
				f = Object(p.a)({
					channelType: e => Object(y.B)(e, "type"),
					currentChannel: y.m,
					memberCount: e => Object(y.B)(e, "memberCount"),
					members: e => Object(x.f)(e),
					fetchingMembers: x.a,
					hasMoreMembers: x.d
				}),
				v = Object(o.b)(f, e => ({
					fetchChannelMembers: t => e(Object(l.e)({
						loadMore: t
					}))
				}));
			t.default = v((function(e) {
				const {
					channelId: t,
					currentChannel: r,
					memberCount: n,
					members: o,
					fetchChannelMembers: c,
					fetchingMembers: l,
					hasMoreMembers: i
				} = e;
				if (r) {
					const {
						channelState: e
					} = r, p = e === d.b.INVITED, y = e === d.b.JOINED, x = () => {
						!l && i && c({
							loadMore: !0
						})
					}, _ = () => !!l;
					return l || o.length || c(), s.a.createElement(u.a, {
						form: !0,
						innerContent: !0
					}, s.a.createElement(b.a, {
						title: a.fbt._({
							"*": "{number of members} group members",
							_1: "1 group member"
						}, [a.fbt._plural(n, "number of members")], {
							hk: "4phXDa"
						})
					}), s.a.createElement(O, {
						loadMoreRows: x,
						isLoadMoreRowsComplete: _,
						threshold: 0
					}, s.a.createElement(m.a, {
						channelId: t,
						members: o,
						modIndicator: !0,
						useNSFWIcons: p || y
					}), l && s.a.createElement(C, {
						role: "progressbar"
					}, a.fbt._("Loading members...", null, {
						hk: "2sCDrM"
					}))), s.a.createElement(h.a, {
						secondaryButtonOnly: !0,
						secondaryButtonText: a.fbt._("Done", null, {
							hk: "2xerWP"
						})
					}))
				}
				return null
			}))
		},
		"./src/chat/controls/OverlayControlBar/index.m.less": function(e, t, r) {
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
		"./src/chat/controls/OverlayControlBar/index.tsx": function(e, t, r) {
			"use strict";
			var a = r("./node_modules/fbt/lib/FbtPublic.js"),
				n = r("./node_modules/react/index.js"),
				s = r.n(n),
				o = r("./node_modules/react-redux/es/index.js"),
				c = r("./node_modules/react-router-redux/es/index.js"),
				l = r("./src/config.ts"),
				m = r("./src/lib/classNames/index.ts"),
				i = r("./src/chat/controls/Button/index.tsx"),
				d = r("./src/chat/controls/OverlayControlBar/index.m.less"),
				u = r.n(d),
				h = r("./src/chat/helpers/dom.ts");
			const b = Object(o.b)(void 0, e => ({
				onSubmit: () => {},
				onCancel: Object(h.b)(() => e(Object(c.a)()))
			}))(e => s.a.createElement("div", {
				className: Object(m.a)({
					[u.a.primary]: e.primaryButtonOnly,
					[u.a.NoHeaderText]: !e.children
				}, u.a.OverlayControlBar, e.className)
			}, e.children && s.a.createElement("span", {
				className: u.a.HeaderText
			}, e.children), s.a.createElement("div", {
				className: u.a.ButtonsWrapper
			}, e.primaryButtonBlock && s.a.createElement(i.a, {
				onClick: e.primaryButtonBlockAction || e.onCancel,
				className: Object(m.a)(u.a.Button, u.a.NoBorderPrimaryButton),
				secondary: !0,
				noBorder: !0
			}, e.primaryButtonBlockText || a.fbt._("Block", null, {
				hk: "4CA4VX"
			})), !e.primaryButtonOnly && (e.secondaryButtonCTLOptions ? s.a.createElement(i.a, {
				className: u.a.Button,
				href: `${l.a.redditHelpUrl}/en/categories/rules-reporting/suicide-response/what-do-i-do-if-someone-talks-about-seriously-hurting`,
				secondary: !0
			}, a.fbt._("Other Options", null, {
				hk: "1RadlV"
			})) : s.a.createElement(i.a, {
				className: u.a.Button,
				onClick: e.secondaryButtonAction || e.onCancel,
				primary: !!e.secondaryButtonOnly,
				secondary: !e.secondaryButtonOnly
			}, e.secondaryButtonText || a.fbt._("Cancel", null, {
				hk: "2TSLl5"
			}))), !e.secondaryButtonOnly && s.a.createElement(i.a, {
				className: u.a.Button,
				type: "submit",
				primary: !0,
				onClick: e.primaryButtonAction || e.onSubmit,
				disabled: e.primaryButtonDisabled
			}, e.primaryButtonText || a.fbt._("Submit", null, {
				hk: "4aU3dh"
			})))));
			b.displayName = "OverlayControlBar", t.a = b
		},
		"./src/chat/controls/OverlayHeader/index.m.less": function(e, t, r) {
			e.exports = {
				BaseMessageStyles: "_1E1yA4seaLlh26LjsJZ5DE",
				baseMessageStyles: "_1E1yA4seaLlh26LjsJZ5DE",
				Header: "_3scCev7HurKBoQph3rzCoU",
				header: "_3scCev7HurKBoQph3rzCoU",
				Title: "_3A0guGtMzQKVwbvpqNB97u",
				title: "_3A0guGtMzQKVwbvpqNB97u",
				Normal: "_1Aqcks07FlOaxti1O-onw7",
				normal: "_1Aqcks07FlOaxti1O-onw7",
				Warning: "_14Pn1s4X6btpX11HaKT9P2",
				warning: "_14Pn1s4X6btpX11HaKT9P2"
			}
		},
		"./src/chat/controls/OverlayHeader/index.tsx": function(e, t, r) {
			"use strict";
			var a = r("./node_modules/react/index.js"),
				n = r.n(a),
				s = r("./src/lib/lessComponent.tsx"),
				o = r("./src/chat/components/ToastNotification/index.tsx"),
				c = r("./src/chat/controls/OverlayHeader/index.m.less"),
				l = r.n(c);
			const m = s.a.header("Header", l.a),
				i = s.a.h1("Title", l.a),
				d = s.a.span("Normal", l.a),
				u = s.a.span("Warning", l.a);
			t.a = ({
				message: e,
				title: t,
				warning: r
			}) => {
				const a = r ? u : d;
				return n.a.createElement(m, null, n.a.createElement(i, null, t), n.a.createElement(a, null, e), n.a.createElement(o.a, null))
			}
		}
	}
]);
//# sourceMappingURL=https://www.redditstatic.com/desktop2x/OverlayChatMembers.9db68fd6cc76c5cb7ddd.js.map