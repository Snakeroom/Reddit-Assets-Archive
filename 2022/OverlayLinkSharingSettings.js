// https://www.redditstatic.com/desktop2x/OverlayLinkSharingSettings.8e046c3d6423e80c7e20.js
// Retrieved at 9/12/2022, 2:10:03 PM by Reddit Dataminer v1.0.0
(window.__LOADABLE_LOADED_CHUNKS__ = window.__LOADABLE_LOADED_CHUNKS__ || []).push([
	["OverlayLinkSharingSettings"], {
		"./src/chat/components/OverlayLinkSharingSettings/index.m.less": function(e, t, n) {
			e.exports = {
				Container: "_1atGq_Amo4ibAI6Nhg3ry_",
				container: "_1atGq_Amo4ibAI6Nhg3ry_",
				CopyLinkSection: "_1Eu3IhkR9p8aZzISjENf7W",
				copyLinkSection: "_1Eu3IhkR9p8aZzISjENf7W",
				Text: "ZLTG5cHBHZBFiCYC5tTKy",
				text: "ZLTG5cHBHZBFiCYC5tTKy",
				OptionsContainer: "Pil7oPBwnpOrYP7DVmbjJ",
				optionsContainer: "Pil7oPBwnpOrYP7DVmbjJ",
				Option: "_1X5je1UUAaOynsjipClfx6",
				option: "_1X5je1UUAaOynsjipClfx6",
				OptionValue: "_2fHMpf0aw_D_HxvJ3Kaj9g",
				optionValue: "_2fHMpf0aw_D_HxvJ3Kaj9g",
				OptionTitle: "_2LcTIU_isVPVId59DBiJPm",
				optionTitle: "_2LcTIU_isVPVId59DBiJPm",
				OptionValueIcon: "_1NxAd8d3SgwiMgPQ-ov0E3",
				optionValueIcon: "_1NxAd8d3SgwiMgPQ-ov0E3",
				DropdownOptionsContainer: "_2ufqqH1vJDe5JfHShdgFov",
				dropdownOptionsContainer: "_2ufqqH1vJDe5JfHShdgFov",
				spin: "_1kZf-4nh0jzZxcevSSTljL"
			}
		},
		"./src/chat/components/OverlayLinkSharingSettings/index.tsx": function(e, t, n) {
			"use strict";
			n.r(t);
			n("./node_modules/core-js/modules/web.dom.iterable.js");
			var a = n("./node_modules/fbt/lib/FbtPublic.js"),
				o = n("./node_modules/react/index.js"),
				s = n.n(o),
				i = n("./node_modules/react-redux/es/index.js"),
				c = n("./src/lib/hooks/useOnClickOutside.ts"),
				l = n("./src/lib/hooks/useTooltip.ts"),
				r = n("./src/chat/actions/inviteLink/index.ts"),
				d = n("./src/chat/actions/inviteLink/constants.ts"),
				m = n("./src/chat/actions/toast.ts"),
				p = n("./src/chat/actions/tracking.ts"),
				u = n("./src/chat/components/OverlayNav/index.tsx"),
				_ = n("./src/chat/constants/toast.ts"),
				O = n("./src/chat/controls/Dropdown/Row.tsx"),
				x = n("./src/chat/controls/Overlay/index.tsx"),
				b = n("./src/chat/controls/OverlayControlBar/index.tsx"),
				S = n("./src/chat/controls/Settings/SectionItem/index.tsx"),
				h = n("./src/chat/controls/Settings/SectionTitle/index.tsx"),
				E = n("./src/chat/controls/TooltipHooked/TooltipConfig.ts"),
				v = n("./src/chat/controls/TooltipHooked/TooltipHooked.tsx"),
				I = n("./src/chat/icons/svgs/CaretDown/index.tsx"),
				T = n("./src/chat/selectors/inviteLink.ts"),
				k = n("./src/chat/components/OverlayLinkSharingSettings/index.m.less"),
				D = n.n(k);
			const f = s.a.memo((function(e) {
				let {
					inviteLinkDataModelId: t,
					isForDirect: n
				} = e;
				const k = Object(i.d)(),
					f = Object(i.e)(e => Object(T.a)(e, t)),
					N = Object(i.e)(e => Object(T.b)(e, t)),
					[j, g] = Object(o.useState)(f),
					[y, C] = Object(o.useState)(N),
					A = Object(l.b)(Object(E.a)(25)),
					w = Object(l.b)(Object(E.a)(25));
				Object(c.a)("EXPIRATION_DROPDOWN_ID", A.hide), Object(c.a)("MAX_USERS_DROPDOWN_ID", w.hide);
				const P = (e, t) => {
						t.stopPropagation(), "EXPIRATION_DROPDOWN_ID" === e ? (A.toggle(), w.hide()) : (A.hide(), w.toggle())
					},
					L = j !== f || y !== N,
					B = Object(o.useMemo)(() => {
						var e;
						return j && (null === (e = d.d[j]) || void 0 === e ? void 0 : e.label())
					}, [j]);
				return s.a.createElement(x.a, {
					isSettings: !0
				}, s.a.createElement(u.a, {
					showMenu: !n,
					channelId: t,
					title: a.fbt._("Invite link", null, {
						hk: "1ZSsKA"
					})
				}), s.a.createElement("div", {
					className: D.a.Container
				}, s.a.createElement(S.a, {
					className: D.a.CopyLinkSection,
					text: a.fbt._("Copy link", null, {
						hk: "2FwfL3"
					}),
					actionButtonAction: () => {
						k(Object(r.e)(t, n)), k(Object(p.o)(r.b.CHAT_SETTINGS))
					},
					actionButtonText: a.fbt._("Copy", null, {
						hk: "1HCnre"
					})
				}), s.a.createElement(h.a, {
					text: a.fbt._("Preferences", null, {
						hk: "htuo3"
					})
				}), s.a.createElement("div", {
					className: D.a.OptionsContainer
				}, s.a.createElement("div", {
					className: D.a.Option
				}, s.a.createElement("span", {
					className: D.a.OptionTitle
				}, a.fbt._("Maximum number of uses", null, {
					hk: "3qPRDT"
				})), s.a.createElement("span", {
					className: D.a.OptionValue,
					onClick: e => P("MAX_USERS_DROPDOWN_ID", e)
				}, s.a.createElement("span", null, y), s.a.createElement("div", {
					tabIndex: 1
				}, s.a.createElement("span", {
					ref: w.target.ref
				}, s.a.createElement(I.a, {
					className: D.a.OptionValueIcon
				})))), s.a.createElement(v.default, {
					arrowProps: w.arrowProps,
					popperProps: w.popperProps,
					visible: w.visible,
					hide: w.hide,
					isInstant: !0,
					noArrow: !0,
					styled: !0
				}, s.a.createElement("div", null, s.a.createElement("div", {
					className: D.a.DropdownOptionsContainer,
					id: "MAX_USERS_DROPDOWN_ID"
				}, d.e.map(e => s.a.createElement(O.a, {
					className: D.a.DropdownRow,
					key: e,
					displayText: String(e),
					onClick: () => {
						(e => {
							C(e), w.hide(), k(Object(p.Q)(r.a.MEMBER, e))
						})(e)
					},
					tabIndex: 2,
					isSelected: !(e !== y)
				})))))), s.a.createElement("div", {
					className: D.a.Option
				}, s.a.createElement("span", {
					className: D.a.OptionTitle
				}, a.fbt._("Expires", null, {
					hk: "2ptoyk"
				})), s.a.createElement("span", {
					className: D.a.OptionValue,
					onClick: e => P("EXPIRATION_DROPDOWN_ID", e)
				}, s.a.createElement("span", null, B), s.a.createElement("div", {
					tabIndex: 2
				}, s.a.createElement("span", {
					ref: A.target.ref
				}, s.a.createElement(I.a, {
					className: D.a.OptionValueIcon
				})))), s.a.createElement(v.default, {
					arrowProps: A.arrowProps,
					popperProps: A.popperProps,
					visible: A.visible,
					hide: A.hide,
					isInstant: !0,
					noArrow: !0,
					styled: !0
				}, s.a.createElement("div", null, s.a.createElement("div", {
					className: D.a.DropdownOptionsContainer,
					id: "EXPIRATION_DROPDOWN_ID"
				}, Object.keys(d.d).map((e, t) => {
					var n, a;
					return s.a.createElement(O.a, {
						className: D.a.DropdownRow,
						key: e,
						displayText: (null === (n = d.d[e]) || void 0 === n ? void 0 : n.label()) || "",
						onClick: () => {
							(e => {
								g(e), A.hide(), k(Object(p.Q)(r.a.TIME, d.d[e].originalLabel))
							})(e)
						},
						tabIndex: 3,
						isSelected: !((null === (a = d.d[e]) || void 0 === a ? void 0 : a.label()) !== B)
					})
				})))))), s.a.createElement(S.a, {
					text: a.fbt._("Reset link", null, {
						hk: "2RsHcx"
					}),
					subtext: a.fbt._("Generates a new link and disables all past links.", null, {
						hk: "3p3aDn"
					}),
					actionButtonAction: () => {
						k(Object(r.g)(t, n)), k(Object(p.w)())
					},
					actionButtonText: a.fbt._("Reset", null, {
						hk: "1AvXhB"
					})
				})), L ? s.a.createElement(b.a, {
					secondaryButtonText: a.fbt._("Cancel", null, {
						hk: "2TSLl5"
					}),
					primaryButtonText: a.fbt._("Save", null, {
						hk: "4yMsMq"
					}),
					primaryButtonAction: () => {
						j && j !== f && k(Object(r.c)({
							inviteLinkDataModelId: t,
							durationLabel: j
						})), y && y !== N && k(Object(r.d)({
							inviteLinkDataModelId: t,
							maxUsersCount: y
						})), k(Object(m.g)({
							toast: _.a.ChangesSaved
						})), k(Object(m.c)())
					},
					secondaryButtonAction: () => {
						C(N), g(f)
					}
				}) : null)
			}));
			t.default = f
		},
		"./src/chat/controls/Settings/SectionItem/index.m.less": function(e, t, n) {
			e.exports = {
				SectionItem: "_3JayfP3nr44aiSTOH3X0TR",
				sectionItem: "_3JayfP3nr44aiSTOH3X0TR",
				Icon: "_1wIpeOzWFdkr1A-76pIh_A",
				icon: "_1wIpeOzWFdkr1A-76pIh_A",
				TextContainer: "_1q_FeJl0KtVLt7TwbSjFfk",
				textContainer: "_1q_FeJl0KtVLt7TwbSjFfk",
				Text: "_2EC-ymaT4--lK6n-72UZQV",
				text: "_2EC-ymaT4--lK6n-72UZQV",
				Subtext: "V-G-Qn5fHp9iOV6BzqZs-",
				subtext: "V-G-Qn5fHp9iOV6BzqZs-",
				ActionButton: "_15Xuz0ABJ5-Zqa82QStwz5",
				actionButton: "_15Xuz0ABJ5-Zqa82QStwz5",
				Button: "_1NDpILgnF5cm6JKemiWxJ",
				button: "_1NDpILgnF5cm6JKemiWxJ"
			}
		},
		"./src/chat/controls/Settings/SectionItem/index.tsx": function(e, t, n) {
			"use strict";
			var a = n("./node_modules/react/index.js"),
				o = n.n(a),
				s = n("./src/lib/classNames/index.ts"),
				i = n("./src/chat/controls/Button/index.tsx"),
				c = n("./src/chat/controls/Settings/SectionItem/index.m.less"),
				l = n.n(c);
			t.a = e => {
				let {
					className: t,
					text: n,
					subtext: a,
					actionButtonText: c,
					actionButtonAction: r,
					children: d
				} = e;
				return o.a.createElement("div", {
					className: Object(s.a)(l.a.SectionItem, t)
				}, d ? o.a.createElement("div", {
					className: l.a.Icon
				}, d) : null, o.a.createElement("div", {
					className: l.a.TextContainer
				}, o.a.createElement("div", {
					className: l.a.Text
				}, n), a ? o.a.createElement("div", {
					className: l.a.Subtext
				}, a) : null), o.a.createElement("div", {
					className: l.a.ActionButton
				}, o.a.createElement(i.a, {
					isSmall: !0,
					secondary: !0,
					className: l.a.Button,
					onClick: r
				}, c)))
			}
		},
		"./src/chat/controls/Settings/SectionTitle/index.m.less": function(e, t, n) {
			e.exports = {
				SectionTitle: "syLXEcIqb2SJy9_YQ8rne",
				sectionTitle: "syLXEcIqb2SJy9_YQ8rne"
			}
		},
		"./src/chat/controls/Settings/SectionTitle/index.tsx": function(e, t, n) {
			"use strict";
			var a = n("./node_modules/react/index.js"),
				o = n.n(a),
				s = n("./src/chat/controls/Settings/SectionTitle/index.m.less"),
				i = n.n(s);
			t.a = e => {
				let {
					text: t
				} = e;
				return o.a.createElement("div", {
					className: i.a.SectionTitle
				}, t)
			}
		}
	}
]);
//# sourceMappingURL=https://www.redditstatic.com/desktop2x/OverlayLinkSharingSettings.8e046c3d6423e80c7e20.js.map