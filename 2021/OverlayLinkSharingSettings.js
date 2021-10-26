// https://www.redditstatic.com/desktop2x/OverlayLinkSharingSettings.2184f4ea662e5d8033b6.js
// Retrieved at 10/26/2021, 2:50:04 PM by Reddit Dataminer v1.0.0
(window.__LOADABLE_LOADED_CHUNKS__ = window.__LOADABLE_LOADED_CHUNKS__ || []).push([
	["OverlayLinkSharingSettings"], {
		"./src/chat/components/OverlayLinkSharingSettings/index.m.less": function(e, t, a) {
			e.exports = {
				Container: "_1atGq_Amo4ibAI6Nhg3ry_",
				container: "_1atGq_Amo4ibAI6Nhg3ry_",
				Text: "ZLTG5cHBHZBFiCYC5tTKy",
				text: "ZLTG5cHBHZBFiCYC5tTKy",
				OptionsContainer: "Pil7oPBwnpOrYP7DVmbjJ",
				optionsContainer: "Pil7oPBwnpOrYP7DVmbjJ",
				Option: "_1X5je1UUAaOynsjipClfx6",
				option: "_1X5je1UUAaOynsjipClfx6",
				OptionValue: "_2fHMpf0aw_D_HxvJ3Kaj9g",
				optionValue: "_2fHMpf0aw_D_HxvJ3Kaj9g",
				OptionIcon: "_39VPf7IvBctoK1-18npfSq",
				optionIcon: "_39VPf7IvBctoK1-18npfSq",
				OptionTitle: "_2LcTIU_isVPVId59DBiJPm",
				optionTitle: "_2LcTIU_isVPVId59DBiJPm",
				spin: "_1kZf-4nh0jzZxcevSSTljL",
				OptionSubtitle: "WBq5UNs2rSk20FY4FcXrr",
				optionSubtitle: "WBq5UNs2rSk20FY4FcXrr",
				OptionValueIcon: "_1NxAd8d3SgwiMgPQ-ov0E3",
				optionValueIcon: "_1NxAd8d3SgwiMgPQ-ov0E3",
				DropdownOptionsContainer: "_2ufqqH1vJDe5JfHShdgFov",
				dropdownOptionsContainer: "_2ufqqH1vJDe5JfHShdgFov",
				DropdownRow: "aFJLWr0LIxZHOe9zjF4yu",
				dropdownRow: "aFJLWr0LIxZHOe9zjF4yu"
			}
		},
		"./src/chat/components/OverlayLinkSharingSettings/index.tsx": function(e, t, a) {
			"use strict";
			a.r(t);
			a("./node_modules/core-js/modules/web.dom.iterable.js");
			var n = a("./node_modules/fbt/lib/FbtPublic.js"),
				o = a("./node_modules/react/index.js"),
				r = a.n(o),
				i = a("./node_modules/react-redux/es/index.js"),
				l = a("./src/lib/hooks/useOnClickOutside.ts"),
				c = a("./src/lib/hooks/useTooltip.ts"),
				s = a("./src/chat/actions/inviteLink/index.ts"),
				p = a("./src/chat/actions/inviteLink/constants.ts"),
				d = a("./src/chat/actions/tracking.ts"),
				m = a("./src/chat/components/OverlayNav/index.tsx"),
				O = a("./src/chat/controls/Dropdown/Row.tsx"),
				u = a("./src/chat/controls/Overlay/index.tsx"),
				h = a("./src/chat/controls/OverlayControlBar/index.tsx"),
				b = a("./src/chat/controls/TooltipHooked/TooltipConfig.ts"),
				v = a("./src/chat/controls/TooltipHooked/TooltipHooked.tsx"),
				E = a("./src/chat/helpers/dom.ts"),
				_ = a("./src/chat/controls/Svg/index.tsx");

			function x() {
				return (x = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var a = arguments[t];
						for (var n in a) Object.prototype.hasOwnProperty.call(a, n) && (e[n] = a[n])
					}
					return e
				}).apply(this, arguments)
			}
			var f = e => r.a.createElement(_.a, x({}, e, {
				viewBox: "0 0 20 20"
			}), e.isFilled ? r.a.createElement("path", {
				d: "M10 13.5a1 1 0 0 1-.707-.293l-5-5 1.414-1.414L10 11.086l4.293-4.293 1.414 1.414-5 5A1 1 0 0 1 10 13.5Z"
			}) : r.a.createElement("path", {
				d: "M10 13.125a.623.623 0 0 1-.442-.183l-5-5 .884-.884L10 11.616l4.558-4.558.884.884-5 5a.623.623 0 0 1-.442.183Z"
			}));

			function j() {
				return (j = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var a = arguments[t];
						for (var n in a) Object.prototype.hasOwnProperty.call(a, n) && (e[n] = a[n])
					}
					return e
				}).apply(this, arguments)
			}
			var I = e => r.a.createElement(_.a, j({}, e, {
				viewBox: "0 0 20 20"
			}), e.isFilled ? r.a.createElement(r.a.Fragment, null, r.a.createElement("path", {
				d: "M11.226,5.192h0a8.27,8.27,0,0,1,2.082-.181,6.585,6.585,0,0,0-1.623-2.7A6.672,6.672,0,0,0,5.52.536h0A6.556,6.556,0,0,0,.568,5.386a6.652,6.652,0,0,0,.717,4.958L.747,12.5a.624.624,0,0,0,.758.758l2.152-.539a6.565,6.565,0,0,0,1.354.589,8.255,8.255,0,0,1,.22-2.239A7.943,7.943,0,0,1,11.226,5.192Z"
			}), r.a.createElement("path", {
				d: "M17.685,8.315A6.669,6.669,0,0,0,11.52,6.536h0a6.556,6.556,0,0,0-4.951,4.85,6.652,6.652,0,0,0,.717,4.958L6.747,18.5a.624.624,0,0,0,.758.758l2.152-.539A6.588,6.588,0,0,0,13,19.624a6.892,6.892,0,0,0,1.611-.192,6.557,6.557,0,0,0,4.851-4.95A6.671,6.671,0,0,0,17.685,8.315Z"
			})) : r.a.createElement(r.a.Fragment, null, r.a.createElement("path", {
				d: "M5.785,1.757A5.418,5.418,0,0,1,10.8,3.2a5.332,5.332,0,0,1,1.205,1.873,8.271,8.271,0,0,1,1.3-.062,6.588,6.588,0,0,0-1.623-2.695A6.672,6.672,0,0,0,5.52.536h0A6.556,6.556,0,0,0,.568,5.386a6.652,6.652,0,0,0,.717,4.958L.747,12.5a.624.624,0,0,0,.758.758l2.152-.539a6.624,6.624,0,0,0,1.354.59,8.03,8.03,0,0,1,.057-1.294A5.379,5.379,0,0,1,4.1,11.52a.624.624,0,0,0-.339-.1.658.658,0,0,0-.152.018l-1.4.35.35-1.4A.623.623,0,0,0,2.48,9.9a5.406,5.406,0,0,1-.7-4.225A5.3,5.3,0,0,1,5.785,1.757Z"
			}), r.a.createElement("path", {
				d: "M17.685,8.315A6.669,6.669,0,0,0,11.52,6.536h0a6.556,6.556,0,0,0-4.951,4.85,6.652,6.652,0,0,0,.717,4.958L6.747,18.5a.624.624,0,0,0,.758.758l2.152-.539A6.588,6.588,0,0,0,13,19.624a6.892,6.892,0,0,0,1.611-.192,6.557,6.557,0,0,0,4.851-4.95A6.671,6.671,0,0,0,17.685,8.315Zm.557,5.9a5.3,5.3,0,0,1-3.92,4,5.423,5.423,0,0,1-4.223-.7.624.624,0,0,0-.339-.1.658.658,0,0,0-.152.018l-1.4.35.35-1.4a.623.623,0,0,0-.082-.49,5.406,5.406,0,0,1-.7-4.225,5.3,5.3,0,0,1,4-3.92,5.389,5.389,0,0,1,6.457,6.46Z"
			})));

			function g() {
				return (g = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var a = arguments[t];
						for (var n in a) Object.prototype.hasOwnProperty.call(a, n) && (e[n] = a[n])
					}
					return e
				}).apply(this, arguments)
			}
			var D = e => r.a.createElement(_.a, g({}, e, {
					viewBox: "0 0 20 20"
				}), e.isFilled ? r.a.createElement("path", {
					d: "M10,.375A9.625,9.625,0,1,0,19.625,10,9.636,9.636,0,0,0,10,.375ZM13.47,14.53,9.25,10.311V4h1.5V9.689l3.78,3.781Z"
				}) : r.a.createElement(r.a.Fragment, null, r.a.createElement("polygon", {
					points: "13.558 14.442 9.375 10.259 9.375 4 10.625 4 10.625 9.741 14.442 13.558 13.558 14.442"
				}), r.a.createElement("path", {
					d: "M10,19.625A9.625,9.625,0,1,1,19.625,10,9.636,9.636,0,0,1,10,19.625Zm0-18A8.375,8.375,0,1,0,18.375,10,8.384,8.384,0,0,0,10,1.625Z"
				}))),
				N = a("./src/chat/icons/svgs/Link/index.tsx"),
				A = a("./src/chat/icons/svgs/Refresh/index.tsx"),
				k = a("./src/chat/selectors/inviteLink.ts"),
				w = a("./src/chat/components/OverlayLinkSharingSettings/index.m.less"),
				y = a.n(w);
			const P = r.a.memo((function({
				inviteLinkDataModelId: e,
				isForDirect: t
			}) {
				const a = Object(i.d)(),
					_ = Object(i.e)(t => Object(k.a)(t, e)),
					x = Object(i.e)(t => Object(k.b)(t, e)),
					j = Object(i.e)(t => Object(k.d)(t, e)),
					g = Object(i.e)(t => Object(k.c)(t, e)),
					w = Object(c.b)(Object(b.d)(16)),
					P = Object(c.b)(Object(b.d)(16));
				Object(l.a)("EXPIRATION_DROPDOWN_ID", w.hide), Object(l.a)("MAX_USERS_DROPDOWN_ID", P.hide);
				const L = (e, t) => {
						t.stopPropagation(), "EXPIRATION_DROPDOWN_ID" === e ? (w.toggle(), P.hide()) : (w.hide(), P.toggle())
					},
					S = Object(o.useMemo)(() => {
						var e;
						return _ && (null === (e = p.d[_]) || void 0 === e ? void 0 : e.label())
					}, [_]);
				return r.a.createElement(u.a, null, r.a.createElement(m.a, {
					showMenu: !0,
					channelId: e,
					title: n.fbt._("Manage Invite Link", null, {
						hk: "1epaNo"
					})
				}), r.a.createElement("div", {
					className: y.a.Container
				}, r.a.createElement("div", {
					className: y.a.OptionsContainer
				}, r.a.createElement("div", {
					className: y.a.Option
				}, r.a.createElement(I, {
					className: y.a.OptionIcon
				}), r.a.createElement("span", {
					className: y.a.OptionTitle
				}, n.fbt._("Maximum number of uses", null, {
					hk: "3qPRDT"
				})), r.a.createElement("span", {
					className: y.a.OptionValue
				}, x), r.a.createElement(v.default, {
					arrowProps: P.arrowProps,
					popperProps: P.popperProps,
					visible: P.visible,
					hide: P.hide,
					isInstant: !0,
					noArrow: !0,
					styled: !0
				}, r.a.createElement("div", null, r.a.createElement("div", {
					className: y.a.DropdownOptionsContainer,
					id: "MAX_USERS_DROPDOWN_ID"
				}, p.e.map(t => r.a.createElement(O.a, {
					className: y.a.DropdownRow,
					key: t,
					displayText: String(t),
					onClick: () => {
						(t => {
							a(Object(s.d)({
								inviteLinkDataModelId: e,
								maxUsersCount: t
							})), P.hide(), a(Object(d.L)(s.a.MEMBER, t))
						})(t)
					},
					tabIndex: 2
				}))))), r.a.createElement("button", {
					tabIndex: 1,
					ref: P.target.ref,
					onClick: e => L("MAX_USERS_DROPDOWN_ID", e)
				}, r.a.createElement(f, {
					className: y.a.OptionValueIcon
				}))), r.a.createElement("div", {
					className: y.a.Option
				}, r.a.createElement(D, {
					className: y.a.OptionIcon
				}), r.a.createElement("span", {
					className: y.a.OptionTitle
				}, n.fbt._("Expires", null, {
					hk: "2ptoyk"
				})), r.a.createElement("span", {
					className: y.a.OptionValue
				}, S), r.a.createElement(v.default, {
					arrowProps: w.arrowProps,
					popperProps: w.popperProps,
					visible: w.visible,
					hide: w.hide,
					isInstant: !0,
					noArrow: !0,
					styled: !0
				}, r.a.createElement("div", null, r.a.createElement("div", {
					className: y.a.DropdownOptionsContainer,
					id: "EXPIRATION_DROPDOWN_ID"
				}, Object.keys(p.d).map((t, n) => {
					var o;
					return r.a.createElement(O.a, {
						className: y.a.DropdownRow,
						key: t,
						displayText: (null === (o = p.d[t]) || void 0 === o ? void 0 : o.label()) || "",
						onClick: () => {
							(t => {
								a(Object(s.c)({
									inviteLinkDataModelId: e,
									durationLabel: t
								})), w.hide(), a(Object(d.L)(s.a.TIME, p.d[t].originalLabel))
							})(t)
						},
						tabIndex: 3
					})
				})))), r.a.createElement("button", {
					tabIndex: 2,
					ref: w.target.ref,
					onClick: e => L("EXPIRATION_DROPDOWN_ID", e)
				}, r.a.createElement(f, {
					className: y.a.OptionValueIcon
				}))), r.a.createElement("span", {
					className: y.a.Option
				}, r.a.createElement(N.a, {
					className: y.a.OptionIcon
				}), r.a.createElement("div", null, r.a.createElement("button", {
					className: y.a.OptionTitle,
					onClick: () => {
						a(Object(s.e)(e, t)), a(Object(d.o)(s.b.CHAT_SETTINGS))
					},
					tabIndex: 4
				}, n.fbt._("Copy invite link", null, {
					hk: "B8iTg"
				}), j && r.a.createElement(A.a, {
					className: y.a.OptionIcon
				})), g && r.a.createElement("span", {
					className: y.a.OptionSubtitle,
					onClick: Object(E.b)()
				}, g))), r.a.createElement("button", {
					className: y.a.Option,
					tabIndex: 4,
					onClick: () => {
						a(Object(s.g)(e, t)), a(Object(d.w)())
					}
				}, r.a.createElement(A.a, {
					className: y.a.OptionIcon
				}), r.a.createElement("span", {
					className: y.a.OptionTitle
				}, n.fbt._("Reset link", null, {
					hk: "1rcn5q"
				}))))), r.a.createElement(h.a, {
					secondaryButtonOnly: !0,
					secondaryButtonText: n.fbt._("Done", null, {
						hk: "2qe50a"
					})
				}))
			}));
			t.default = P
		},
		"./src/chat/icons/svgs/Refresh/index.tsx": function(e, t, a) {
			"use strict";
			var n = a("./node_modules/react/index.js"),
				o = a.n(n),
				r = a("./src/chat/controls/Svg/index.tsx");

			function i() {
				return (i = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var a = arguments[t];
						for (var n in a) Object.prototype.hasOwnProperty.call(a, n) && (e[n] = a[n])
					}
					return e
				}).apply(this, arguments)
			}
			t.a = e => o.a.createElement(r.a, i({}, e, {
				viewBox: "0 0 20 20"
			}), o.a.createElement("path", {
				d: "M16.375 10A6.375 6.375 0 1 1 10 3.625h3.274L11.6 5.02l.8.96 3-2.5a.625.625 0 0 0 0-.96l-3-2.5-.8.96 1.674 1.4H10A7.625 7.625 0 1 0 17.625 10Zm-2.351-7L14 3.02v-.04Z"
			}))
		}
	}
]);
//# sourceMappingURL=https://www.redditstatic.com/desktop2x/OverlayLinkSharingSettings.2184f4ea662e5d8033b6.js.map