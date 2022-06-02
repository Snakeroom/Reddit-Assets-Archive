// https://www.redditstatic.com/desktop2x/OverlayPrivacyAndSupport.47c5edfc27c061442cf2.js
// Retrieved at 6/2/2022, 10:50:04 AM by Reddit Dataminer v1.0.0
(window.__LOADABLE_LOADED_CHUNKS__ = window.__LOADABLE_LOADED_CHUNKS__ || []).push([
	["OverlayPrivacyAndSupport"], {
		"./src/chat/components/OverlayPrivacyAndSupport/index.m.less": function(e, t, a) {
			e.exports = {
				DropDownSection: "_2mRHb0d8RpF9bCj-2K50J8",
				dropDownSection: "_2mRHb0d8RpF9bCj-2K50J8",
				DropDownSectionLabel: "_2jiptdHLDnF5a2cE6U7Q3c",
				dropDownSectionLabel: "_2jiptdHLDnF5a2cE6U7Q3c",
				DropdownOptionsContainer: "_32RyGSrNYAuetFrxGo9bdH",
				dropdownOptionsContainer: "_32RyGSrNYAuetFrxGo9bdH",
				Option: "_23rYF0s-sAYnhAmkQl8klP",
				option: "_23rYF0s-sAYnhAmkQl8klP",
				OptionValue: "_1hOYEiXeXogqNjRYdezL9r",
				optionValue: "_1hOYEiXeXogqNjRYdezL9r",
				OptionValueIcon: "qdU1q1HM4GeHAgHwND0Pp",
				optionValueIcon: "qdU1q1HM4GeHAgHwND0Pp",
				TrustedUsersSection: "_3IYUaWtg3rCBLi6Ahvog1t",
				trustedUsersSection: "_3IYUaWtg3rCBLi6Ahvog1t",
				SearchWrapper: "BXNAciuWC8GrBfr6wHNXQ",
				searchWrapper: "BXNAciuWC8GrBfr6wHNXQ",
				Scroller: "W5N2pB_9jFB2_TdyW1rBY",
				scroller: "W5N2pB_9jFB2_TdyW1rBY",
				ListItem: "_33AjcfCZIfL0xpkijPGbvH",
				listItem: "_33AjcfCZIfL0xpkijPGbvH",
				Error: "_2iQ8jsh0xjHBPl00iy2L-_",
				error: "_2iQ8jsh0xjHBPl00iy2L-_"
			}
		},
		"./src/chat/components/OverlayPrivacyAndSupport/index.tsx": function(e, t, a) {
			"use strict";
			a.r(t);
			var n = a("./node_modules/fbt/lib/FbtPublic.js"),
				s = a("./node_modules/react/index.js"),
				c = a.n(s),
				r = a("./node_modules/react-redux/es/index.js"),
				o = a("./src/config.ts"),
				i = a("./src/lib/hooks/useOnClickOutside.ts"),
				l = a("./src/lib/hooks/useTooltip.ts"),
				h = a("./src/lib/opener/index.ts"),
				d = a("./src/chat/actions/invitePolicy/index.ts"),
				m = a("./src/chat/actions/sendbird/index.ts"),
				u = a("./src/chat/actions/user.ts"),
				p = a("./src/chat/actions/whiteList/index.ts"),
				b = a("./src/chat/components/OverlayNav/index.tsx"),
				x = a("./src/chat/components/Scroller/index.tsx"),
				f = a("./src/chat/components/SearchBar/index.tsx"),
				_ = a("./src/chat/components/SelectableUser/index.tsx"),
				S = a("./src/chat/controls/Dropdown/Row.tsx"),
				E = a("./src/chat/controls/Overlay/index.tsx"),
				y = a("./src/chat/controls/Settings/SectionItem/index.tsx"),
				g = a("./src/chat/controls/Settings/SectionTitle/index.tsx"),
				j = a("./src/chat/controls/TooltipHooked/TooltipConfig.ts"),
				O = a("./src/chat/controls/TooltipHooked/TooltipHooked.tsx"),
				N = a("./src/chat/icons/svgs/CaretDown/index.tsx"),
				v = a("./src/chat/models/InvitePolicy/index.ts"),
				I = a("./src/chat/selectors/contacts.ts"),
				w = a("./src/chat/selectors/user.ts"),
				T = a("./src/chat/components/OverlayPrivacyAndSupport/index.m.less"),
				B = a.n(T);
			t.default = () => {
				const e = Object(r.d)(),
					[t, a] = Object(s.useState)(""),
					[T, k] = Object(s.useState)(!1),
					C = Object(r.e)(I.h),
					H = Object(r.e)(I.j),
					D = Object(r.e)(w.d),
					L = Object(r.e)(I.g),
					P = Object(l.b)(Object(j.a)(25));
				Object(i.a)("DROPDOWN_ID", P.hide);
				const F = e => e.toLocaleLowerCase(),
					W = Object(s.useMemo)(() => {
						const e = [];
						return H.map(t => {
							for (const a in L) F(L[a].id) === t && e.push(L[a])
						}), e
					}, [L, H]);
				Object(s.useEffect)(() => {
					(async () => {
						await e(Object(d.c)()), await e(Object(p.e)(!0))
					})()
				}, [e]);
				const U = Object(s.useMemo)(() => {
						const e = C[F(t)];
						return !e || !e.loaded || e.valid
					}, [t, C]),
					A = Object(s.useMemo)(() => {
						const e = C[F(t)];
						return e && !(null == e ? void 0 : e.loaded)
					}, [t, C]),
					R = Object(s.useRef)(null),
					z = D !== v.a.anybody;
				return c.a.createElement(E.a, {
					isSettings: !0,
					innerContent: !0
				}, c.a.createElement(b.a, {
					showMenu: !0,
					title: n.fbt._("Privacy & support", null, {
						hk: "1yDy8"
					})
				}), c.a.createElement(c.a.Fragment, null, c.a.createElement(y.a, {
					text: n.fbt._("Get help with chat", null, {
						hk: "3ei08r"
					}),
					actionButtonAction: () => Object(h.e)(o.a.chatHelpUrl, "_blank"),
					actionButtonText: n.fbt._("Visit Help", null, {
						hk: "2txLEM"
					})
				}), c.a.createElement("div", {
					className: B.a.DropDownSection,
					id: "DROPDOWN_ID"
				}, c.a.createElement("div", {
					className: B.a.DropDownSectionLabel
				}, n.fbt._("Who can invite you to chat", null, {
					hk: "HXQFW"
				})), c.a.createElement("div", {
					className: B.a.Option,
					onClick: P.toggle
				}, c.a.createElement("span", {
					className: B.a.OptionValue
				}, Object(v.c)(D), c.a.createElement("span", {
					ref: P.target.ref
				}, c.a.createElement(N.a, {
					className: B.a.OptionValueIcon
				})))), c.a.createElement(O.default, {
					arrowProps: P.arrowProps,
					popperProps: P.popperProps,
					visible: P.visible,
					hide: P.hide,
					isInstant: !0,
					noArrow: !0,
					styled: !0
				}, c.a.createElement("div", null, c.a.createElement("div", {
					className: B.a.DropdownOptionsContainer,
					id: "DROPDOWN_ID"
				}, v.d.map(t => c.a.createElement(S.a, {
					key: t,
					displayText: Object(v.c)(t),
					onClick: () => (t => {
						P.hide(), e(Object(d.d)(t))
					})(t),
					isSelected: t === D
				})))))), z ? c.a.createElement("div", {
					className: B.a.TrustedUsersSection
				}, c.a.createElement(g.a, {
					text: n.fbt._("Trusted users", null, {
						hk: "46PCJU"
					})
				}), c.a.createElement("div", {
					className: B.a.SearchWrapper
				}, c.a.createElement(f.a, {
					innerRef: R,
					isLoading: A,
					filter: t,
					resetFilter: T,
					selectedContacts: W,
					placeholder: n.fbt._("Add a trusted user", null, {
						hk: "4zpouZ"
					}),
					onFilterReset: () => {
						a(""), k(!1)
					},
					onFilterContacts: e => {
						a(e)
					},
					onIdentifyContact: t => {
						e(Object(m.j)({
							username: t
						}))
					},
					onUnselect: t => {
						e(Object(u.t)(t))
					}
				}), U ? null : c.a.createElement("span", {
					className: B.a.Error
				}, n.fbt._("User doesn't exist", null, {
					hk: "2nKv7P"
				})), c.a.createElement(x.a, {
					className: B.a.Scroller
				}, (() => t ? L.filter(e => F(e.name).includes(F(t)) && !e.isBlocked).sort(e => e.name === t ? -1 : 0) : L)().map(t => c.a.createElement("div", {
					className: B.a.ListItem,
					key: t.id
				}, c.a.createElement(_.a, {
					isTextCheckbox: !0,
					contact: t,
					isChecked: !!t.isWhitelisted,
					onChange: () => (t => {
						t.isWhitelisted ? e(Object(p.f)(t)) : e(Object(p.d)(t.name))
					})(t)
				})))))) : null))
			}
		},
		"./src/chat/components/SearchBar/index.m.less": function(e, t, a) {
			e.exports = {
				SearchBarWrapper: "KhZg0bTs9OULHNVuM28-j",
				searchBarWrapper: "KhZg0bTs9OULHNVuM28-j",
				LoadIcon: "_1SSH0p5LIjDDzWTWgDl3Hg",
				loadIcon: "_1SSH0p5LIjDDzWTWgDl3Hg",
				SearchIcon: "_1fF5rR85aN7B4xWTLIhPjw",
				searchIcon: "_1fF5rR85aN7B4xWTLIhPjw",
				zoomInOut: "j7ceNIADkgzX3UWA8eLnj",
				SearchBarField: "_3vilBtEofGPjLW8XnN__LH",
				searchBarField: "_3vilBtEofGPjLW8XnN__LH",
				SearchBarInput: "_2clRIy8wf_7H8xNNrUPaiU",
				searchBarInput: "_2clRIy8wf_7H8xNNrUPaiU",
				Bubble: "_3Os5eNEJdv4w6tsQdtTT5d",
				bubble: "_3Os5eNEJdv4w6tsQdtTT5d"
			}
		},
		"./src/chat/components/SearchBar/index.tsx": function(e, t, a) {
			"use strict";
			a.d(t, "a", (function() {
				return j
			}));
			var n = a("./node_modules/fbt/lib/FbtPublic.js"),
				s = a("./node_modules/lodash/last.js"),
				c = a.n(s),
				r = a("./node_modules/react/index.js"),
				o = a.n(r),
				i = a("./src/lib/classNames/index.ts"),
				l = a("./src/lib/lessComponent.tsx"),
				h = a("./src/chat/components/Scroller/index.tsx"),
				d = a("./src/chat/constants/keys.ts"),
				m = a("./src/chat/helpers/dom.ts"),
				u = a("./src/chat/controls/Svg/index.tsx");

			function p() {
				return (p = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var a = arguments[t];
						for (var n in a) Object.prototype.hasOwnProperty.call(a, n) && (e[n] = a[n])
					}
					return e
				}).apply(this, arguments)
			}
			var b = e => o.a.createElement(u.a, p({}, e, {
					viewBox: "0 0 20 20"
				}), o.a.createElement("rect", {
					x: "1",
					y: "9.375",
					width: "4",
					height: "1.25"
				}), o.a.createElement("rect", {
					x: "15",
					y: "9.375",
					width: "4",
					height: "1.25"
				}), o.a.createElement("rect", {
					x: "9.375",
					y: "1",
					width: "1.25",
					height: "4"
				}), o.a.createElement("rect", {
					x: "9.375",
					y: "15",
					width: "1.25",
					height: "4"
				}), o.a.createElement("rect", {
					x: "1.938",
					y: "12.875",
					width: "4",
					height: "1.25",
					transform: "translate(-6.221 3.776) rotate(-29.989)"
				}), o.a.createElement("rect", {
					x: "14.062",
					y: "5.875",
					width: "4",
					height: "1.25",
					transform: "translate(-1.099 8.899) rotate(-29.989)"
				}), o.a.createElement("rect", {
					x: "5.875",
					y: "1.938",
					width: "1.25",
					height: "4",
					transform: "translate(-1.098 3.777) rotate(-29.998)"
				}), o.a.createElement("rect", {
					x: "12.875",
					y: "14.062",
					width: "1.25",
					height: "4",
					transform: "translate(-6.222 8.901) rotate(-29.998)"
				}), o.a.createElement("rect", {
					x: "15.437",
					y: "11.5",
					width: "1.25",
					height: "4",
					transform: "translate(-3.661 20.66) rotate(-59.998)"
				}), o.a.createElement("rect", {
					x: "3.313",
					y: "4.5",
					width: "1.25",
					height: "4",
					transform: "translate(-3.66 6.66) rotate(-59.998)"
				}), o.a.createElement("rect", {
					x: "4.5",
					y: "15.437",
					width: "4",
					height: "1.25",
					transform: "translate(-10.66 13.657) rotate(-59.989)"
				}), o.a.createElement("rect", {
					x: "11.5",
					y: "3.313",
					width: "4",
					height: "1.25",
					transform: "translate(3.338 13.658) rotate(-59.989)"
				})),
				x = a("./src/chat/icons/svgs/Search/index.tsx"),
				f = a("./src/chat/components/SearchBar/index.m.less"),
				_ = a.n(f),
				S = a("./src/lib/combineRefs/index.tsx");
			const E = l.a.span("Bubble", _.a),
				y = l.a.span("SearchBarField", _.a),
				g = l.a.input("SearchBarInput", _.a);
			class j extends o.a.Component {
				constructor(e) {
					super(e), this.bubbleRefs = {}, this.timeoutToken = null, this.onBubbleKey = e => t => {
						switch (t.key) {
							case d.f:
							case d.e: {
								const t = this.searchBarInputRef.current;
								return t && t.focus(), this.props.onUnselect(e.id)
							}
							case d.b: {
								const e = t.target;
								if (e.previousElementSibling) {
									e.previousElementSibling.focus()
								}
								break
							}
							case d.c: {
								const e = t.target;
								if (e.nextElementSibling) {
									e.nextElementSibling.focus()
								}
							}
						}
					}, this.onBubbleKey = this.onBubbleKey.bind(this), this.onFilterChange = this.onFilterChange.bind(this), this.stopEnter = this.stopEnter.bind(this), this.searchKeyHandler = this.searchKeyHandler.bind(this), this.searchBarInputRef = o.a.createRef()
				}
				stopEnter(e) {
					e.key === d.g && e.preventDefault()
				}
				onFilterChange(e) {
					this.props.onFilterContacts(e.currentTarget.value)
				}
				searchKeyHandler(e) {
					const {
						props: {
							onFilterContacts: t,
							onIdentifyContact: a,
							onIdentifyContactTimeout: n
						}
					} = this, s = e.currentTarget, r = () => s.value;
					switch (this.timeoutToken && clearTimeout(this.timeoutToken), this.timeoutToken = setTimeout(() => {
						r() && a(r())
					}, n), e.key) {
						case d.g:
							return a(r());
						case d.b:
						case d.f:
						case d.e:
							if (0 === r().length) {
								const e = c()(this.props.selectedContacts);
								if (e && e.name) {
									const t = this.bubbleRefs[e.name];
									t && t.focus()
								}
							}
					}
					return t(r())
				}
				render() {
					const {
						props: {
							isLoading: e,
							filter: t,
							resetFilter: a,
							selectedContacts: s,
							onFilterReset: c,
							className: r,
							placeholder: l
						}
					} = this, d = a ? "" : t;
					return o.a.createElement(h.a, {
						autoScrollBottom: !0,
						className: Object(i.a)(_.a.SearchBarWrapper, r)
					}, s.length ? null : e ? o.a.createElement(b, {
						className: _.a.LoadIcon
					}) : o.a.createElement(x.a, {
						className: _.a.SearchIcon
					}), o.a.createElement(y, null, s && s.length > 0 && s.map((e, t) => o.a.createElement(E, {
						key: `selected-contact-${t}`,
						tabIndex: 0,
						onKeyDown: Object(m.a)(this.onBubbleKey(e)),
						innerRef: t => {
							t && (this.bubbleRefs[e.name] = t)
						}
					}, e.name)), o.a.createElement(g, {
						placeholder: s.length ? "" : l || n.fbt._("Type usernames", null, {
							hk: "15RdA4"
						}),
						key: "search-bar",
						type: "text",
						autoFocus: !0,
						value: d,
						onFocus: c,
						onChange: this.onFilterChange,
						onKeyDown: this.stopEnter,
						onKeyUp: this.searchKeyHandler,
						innerRef: Object(S.a)(this.searchBarInputRef, this.props.innerRef)
					})))
				}
			}
			j.defaultProps = {
				onIdentifyContactTimeout: 500
			}
		},
		"./src/chat/components/SelectableUser/index.m.less": function(e, t, a) {
			e.exports = {
				Checkbox: "_245EMGvr6FxhYfqTf2m6Zk",
				checkbox: "_245EMGvr6FxhYfqTf2m6Zk",
				UserPic: "zW7z1umVHXoa1LGs0PhqY",
				userPic: "zW7z1umVHXoa1LGs0PhqY",
				Name: "_1HoUzT_zRlnm-zLSJPRh28",
				name: "_1HoUzT_zRlnm-zLSJPRh28",
				UserInfoWrapper: "_9qboECu4INdyuSmkF-DNd",
				userInfoWrapper: "_9qboECu4INdyuSmkF-DNd",
				UserMetaWrapper: "_3DT169WjMBbQwP3HsZzHXU",
				userMetaWrapper: "_3DT169WjMBbQwP3HsZzHXU"
			}
		},
		"./src/chat/components/SelectableUser/index.tsx": function(e, t, a) {
			"use strict";
			var n = a("./node_modules/react/index.js"),
				s = a.n(n),
				c = a("./src/chat/controls/Checkbox/index.tsx"),
				r = a("./src/chat/icons/Userpic/index.tsx"),
				o = a("./src/chat/components/SelectableUser/index.m.less"),
				i = a.n(o);
			t.a = e => {
				let {
					formName: t,
					contact: {
						id: a,
						name: n
					},
					onChange: o,
					isChecked: l,
					isTextCheckbox: h
				} = e;
				return s.a.createElement(c.a, {
					className: i.a.Checkbox,
					type: "checkbox",
					name: t,
					value: n,
					onChange: o,
					checked: l,
					id: a,
					isTextCheckbox: h
				}, s.a.createElement("div", {
					className: i.a.UserInfoWrapper
				}, s.a.createElement(r.a, {
					className: i.a.UserPic,
					userId: a,
					width: "22px",
					height: "22px"
				}), s.a.createElement("div", {
					className: i.a.UserMetaWrapper
				}, s.a.createElement("div", {
					className: i.a.Name
				}, n))))
			}
		},
		"./src/chat/controls/Settings/SectionItem/index.m.less": function(e, t, a) {
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
		"./src/chat/controls/Settings/SectionItem/index.tsx": function(e, t, a) {
			"use strict";
			var n = a("./node_modules/react/index.js"),
				s = a.n(n),
				c = a("./src/lib/classNames/index.ts"),
				r = a("./src/chat/controls/Button/index.tsx"),
				o = a("./src/chat/controls/Settings/SectionItem/index.m.less"),
				i = a.n(o);
			t.a = e => {
				let {
					className: t,
					text: a,
					subtext: n,
					actionButtonText: o,
					actionButtonAction: l,
					children: h
				} = e;
				return s.a.createElement("div", {
					className: Object(c.a)(i.a.SectionItem, t)
				}, h ? s.a.createElement("div", {
					className: i.a.Icon
				}, h) : null, s.a.createElement("div", {
					className: i.a.TextContainer
				}, s.a.createElement("div", {
					className: i.a.Text
				}, a), n ? s.a.createElement("div", {
					className: i.a.Subtext
				}, n) : null), s.a.createElement("div", {
					className: i.a.ActionButton
				}, s.a.createElement(r.a, {
					isSmall: !0,
					secondary: !0,
					className: i.a.Button,
					onClick: l
				}, o)))
			}
		},
		"./src/chat/controls/Settings/SectionTitle/index.m.less": function(e, t, a) {
			e.exports = {
				SectionTitle: "syLXEcIqb2SJy9_YQ8rne",
				sectionTitle: "syLXEcIqb2SJy9_YQ8rne"
			}
		},
		"./src/chat/controls/Settings/SectionTitle/index.tsx": function(e, t, a) {
			"use strict";
			var n = a("./node_modules/react/index.js"),
				s = a.n(n),
				c = a("./src/chat/controls/Settings/SectionTitle/index.m.less"),
				r = a.n(c);
			t.a = e => {
				let {
					text: t
				} = e;
				return s.a.createElement("div", {
					className: r.a.SectionTitle
				}, t)
			}
		}
	}
]);
//# sourceMappingURL=https://www.redditstatic.com/desktop2x/OverlayPrivacyAndSupport.47c5edfc27c061442cf2.js.map