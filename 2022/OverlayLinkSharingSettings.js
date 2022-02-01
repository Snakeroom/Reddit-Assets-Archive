// https://www.redditstatic.com/desktop2x/OverlayLinkSharingSettings.fd63a11b175a858ade15.js
// Retrieved at 2/1/2022, 11:50:05 AM by Reddit Dataminer v1.0.0
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
			const f = s.a.memo((function({
				inviteLinkDataModelId: e,
				isForDirect: t
			}) {
				const n = Object(i.d)(),
					k = Object(i.e)(t => Object(T.a)(t, e)),
					f = Object(i.e)(t => Object(T.b)(t, e)),
					[N, j] = Object(o.useState)(k),
					[g, y] = Object(o.useState)(f),
					C = Object(l.b)(Object(E.a)(25)),
					A = Object(l.b)(Object(E.a)(25));
				Object(c.a)("EXPIRATION_DROPDOWN_ID", C.hide), Object(c.a)("MAX_USERS_DROPDOWN_ID", A.hide);
				const w = (e, t) => {
						t.stopPropagation(), "EXPIRATION_DROPDOWN_ID" === e ? (C.toggle(), A.hide()) : (C.hide(), A.toggle())
					},
					P = N !== k || g !== f,
					L = Object(o.useMemo)(() => {
						var e;
						return N && (null === (e = d.d[N]) || void 0 === e ? void 0 : e.label())
					}, [N]);
				return s.a.createElement(x.a, {
					isSettings: !0
				}, s.a.createElement(u.a, {
					showMenu: !t,
					channelId: e,
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
						n(Object(r.e)(e, t)), n(Object(p.o)(r.b.CHAT_SETTINGS))
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
					onClick: e => w("MAX_USERS_DROPDOWN_ID", e)
				}, s.a.createElement("span", null, g), s.a.createElement("div", {
					tabIndex: 1
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
					id: "MAX_USERS_DROPDOWN_ID"
				}, d.e.map(e => s.a.createElement(O.a, {
					className: D.a.DropdownRow,
					key: e,
					displayText: String(e),
					onClick: () => {
						(e => {
							y(e), A.hide(), n(Object(p.O)(r.a.MEMBER, e))
						})(e)
					},
					tabIndex: 2,
					isSelected: !(e !== g)
				})))))), s.a.createElement("div", {
					className: D.a.Option
				}, s.a.createElement("span", {
					className: D.a.OptionTitle
				}, a.fbt._("Expires", null, {
					hk: "2ptoyk"
				})), s.a.createElement("span", {
					className: D.a.OptionValue,
					onClick: e => w("EXPIRATION_DROPDOWN_ID", e)
				}, s.a.createElement("span", null, L), s.a.createElement("div", {
					tabIndex: 2
				}, s.a.createElement("span", {
					ref: C.target.ref
				}, s.a.createElement(I.a, {
					className: D.a.OptionValueIcon
				})))), s.a.createElement(v.default, {
					arrowProps: C.arrowProps,
					popperProps: C.popperProps,
					visible: C.visible,
					hide: C.hide,
					isInstant: !0,
					noArrow: !0,
					styled: !0
				}, s.a.createElement("div", null, s.a.createElement("div", {
					className: D.a.DropdownOptionsContainer,
					id: "EXPIRATION_DROPDOWN_ID"
				}, Object.keys(d.d).map((e, t) => {
					var a, o;
					return s.a.createElement(O.a, {
						className: D.a.DropdownRow,
						key: e,
						displayText: (null === (a = d.d[e]) || void 0 === a ? void 0 : a.label()) || "",
						onClick: () => {
							(e => {
								j(e), C.hide(), n(Object(p.O)(r.a.TIME, d.d[e].originalLabel))
							})(e)
						},
						tabIndex: 3,
						isSelected: !((null === (o = d.d[e]) || void 0 === o ? void 0 : o.label()) !== L)
					})
				})))))), s.a.createElement(S.a, {
					text: a.fbt._("Reset link", null, {
						hk: "2RsHcx"
					}),
					subtext: a.fbt._("Generates a new link and disables all past links.", null, {
						hk: "3p3aDn"
					}),
					actionButtonAction: () => {
						n(Object(r.g)(e, t)), n(Object(p.w)())
					},
					actionButtonText: a.fbt._("Reset", null, {
						hk: "1AvXhB"
					})
				})), P ? s.a.createElement(b.a, {
					secondaryButtonText: a.fbt._("Cancel", null, {
						hk: "2TSLl5"
					}),
					primaryButtonText: a.fbt._("Save", null, {
						hk: "4yMsMq"
					}),
					primaryButtonAction: () => {
						N && N !== k && n(Object(r.c)({
							inviteLinkDataModelId: e,
							durationLabel: N
						})), g && g !== f && n(Object(r.d)({
							inviteLinkDataModelId: e,
							maxUsersCount: g
						})), n(Object(m.g)({
							toast: _.a.ChangesSaved
						})), n(Object(m.c)())
					},
					secondaryButtonAction: () => {
						y(f), j(k)
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
			t.a = ({
				className: e,
				text: t,
				subtext: n,
				actionButtonText: a,
				actionButtonAction: c,
				children: r
			}) => o.a.createElement("div", {
				className: Object(s.a)(l.a.SectionItem, e)
			}, r ? o.a.createElement("div", {
				className: l.a.Icon
			}, r) : null, o.a.createElement("div", {
				className: l.a.TextContainer
			}, o.a.createElement("div", {
				className: l.a.Text
			}, t), n ? o.a.createElement("div", {
				className: l.a.Subtext
			}, n) : null), o.a.createElement("div", {
				className: l.a.ActionButton
			}, o.a.createElement(i.a, {
				isSmall: !0,
				secondary: !0,
				className: l.a.Button,
				onClick: c
			}, a)))
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
			t.a = ({
				text: e
			}) => o.a.createElement("div", {
				className: i.a.SectionTitle
			}, e)
		}
	}
]);
//# sourceMappingURL=https://www.redditstatic.com/desktop2x/OverlayLinkSharingSettings.fd63a11b175a858ade15.js.map