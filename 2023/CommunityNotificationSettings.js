// https://www.redditstatic.com/desktop2x/CommunityNotificationSettings.8cc13d6fe553e6c9a45a.js
// Retrieved at 4/17/2023, 6:40:03 PM by Reddit Dataminer v1.0.0
(window.__LOADABLE_LOADED_CHUNKS__ = window.__LOADABLE_LOADED_CHUNKS__ || []).push([
	["CommunityNotificationSettings"], {
		"./node_modules/lodash/times.js": function(e, t, n) {
			var s = n("./node_modules/lodash/_baseTimes.js"),
				o = n("./node_modules/lodash/_castFunction.js"),
				i = n("./node_modules/lodash/toInteger.js"),
				a = 9007199254740991,
				r = 4294967295,
				c = Math.min;
			e.exports = function(e, t) {
				if ((e = i(e)) < 1 || e > a) return [];
				var n = r,
					d = c(e, r);
				t = o(t), e -= r;
				for (var l = s(d, t); ++n < e;) t(n);
				return l
			}
		},
		"./src/reddit/components/ModalStyledComponents/Modal.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/react/index.js"),
				o = n.n(s),
				i = n("./src/higherOrderComponents/asModal/index.tsx"),
				a = n("./src/reddit/components/ModalStyledComponents/index.tsx"),
				r = n("./src/reddit/controls/TextButton/index.tsx"),
				c = n("./src/reddit/layout/twoCol/ExpandLeft/index.tsx");
			const d = e => e.preventDefault();
			t.a = Object(i.a)(e => {
				const t = !!e.cancelActionText,
					n = !(!e.actionText || !e.onConfirm);
				return o.a.createElement(a.e, {
					style: e.style
				}, o.a.createElement(a.i, null, o.a.createElement(c.a, null, o.a.createElement(a.q, null, e.headerText), !e.hideCancel && o.a.createElement(r.a, {
					onClick: () => {
						e.trackCancel && e.trackCancel(), e.toggleModal()
					}
				}, o.a.createElement(a.b, null)))), o.a.createElement(a.l, null, e.modalBody), (t || n) && o.a.createElement(a.g, null, t && o.a.createElement(a.a, {
					"data-redditstyle": !0,
					onMouseDown: d,
					onClick: () => {
						e.trackCancel && e.trackCancel(), e.toggleModal()
					}
				}, e.cancelActionText), n && o.a.createElement(a.u, {
					"data-redditstyle": !0,
					onMouseDown: d,
					onClick: t => {
						e.onConfirm && e.onConfirm(), e.toggleModal(), e.trackClick && e.trackClick()
					}
				}, e.actionText)))
			})
		},
		"./src/reddit/components/Settings/Notifications/CommunityNotificationSettings/index.m.less": function(e, t, n) {
			e.exports = {
				container: "_1zWtHiYTjd_dHKshI_FQLR",
				dropdown: "_2muFC1qWHk2mO5x8lGVyGM",
				dropdownItemIcon: "_1D9iFrWOBZmGhWOOTxQSQd",
				subreddit: "IdgQ7L1oPiV2CHjiixIsL",
				subredditIcon: "_1mbmPey1Ti7N82RxiNYwk4",
				subredditInfo: "iCOtIByN3gRJuGnBSiRH8",
				subredditInfoName: "_1YSZsZPokJgrQgt6O8wyQc",
				subredditInfoNotification: "S1AmtANJqf-rrPlopYsx6",
				errorMessage: "_1lRWEAsFlmp7KoBrRTsBv_"
			}
		},
		"./src/reddit/components/Settings/Notifications/CommunityNotificationSettings/index.tsx": function(e, t, n) {
			"use strict";
			n.r(t);
			var s = n("./node_modules/@researchgate/react-intersection-observer/lib/es/index.js"),
				o = n("./node_modules/fbt/lib/FbtPublic.js"),
				i = n("./node_modules/reselect/es/index.js"),
				a = n("./node_modules/react/index.js"),
				r = n.n(a),
				c = n("./node_modules/react-redux/es/index.js"),
				d = n("./src/reddit/actions/notificationSettingsLayout/index.ts"),
				l = n("./src/reddit/actions/subreddit/muting.ts"),
				u = n("./src/reddit/actions/subreddit/notifications.ts"),
				m = n("./src/reddit/components/ModalStyledComponents/Modal.tsx"),
				p = n("./src/reddit/icons/fonts/index.tsx"),
				f = n("./src/reddit/models/Subreddit/index.ts");
			var h = n("./src/reddit/components/SubredditIcon/index.tsx"),
				b = n("./src/reddit/constants/experiments.ts"),
				g = n("./src/reddit/controls/DropdownSelector/index.tsx"),
				O = n("./src/reddit/helpers/trackers/notifications.ts"),
				x = n("./src/reddit/helpers/trackers/subredditMuting.ts"),
				_ = n("./src/reddit/hooks/useExperimentVariant.ts"),
				S = n("./src/reddit/hooks/useTracking.ts"),
				E = n("./src/reddit/components/Settings/Notifications/CommunityNotificationSettings/index.m.less"),
				v = n.n(E);
			const C = e => {
				let {
					subreddit: t,
					onUnmute: n,
					onSelect: s
				} = e;
				var i, c;
				const d = Object(_.a)(b.J),
					[l, u] = Object(a.useState)(!1),
					E = Object(a.useRef)(),
					C = Object(S.a)(),
					{
						id: N,
						notificationLevel: k,
						name: y,
						isNsfw: w,
						isMuted: I
					} = t,
					j = I && d === b.Pd,
					L = j ? f.c.OFF : k,
					T = t.styles.icon || (null === (i = t.styles.legacyIcon) || void 0 === i ? void 0 : i.url),
					D = null !== (c = t.styles.primaryColor) && void 0 !== c ? c : void 0,
					M = (e => {
						switch (e) {
							case f.c.OFF:
								return o.fbt._("Off", null, {
									hk: "1JWIiA"
								});
							case f.c.FREQUENT:
								return o.fbt._("High Frequency", null, {
									hk: "1W8tQh"
								});
							case f.c.LOW:
							default:
								return o.fbt._("Low", null, {
									hk: "2YMQmI"
								})
						}
					})(L),
					F = (e => {
						switch (e) {
							case f.c.OFF:
								return o.fbt._("OFF", null, {
									hk: "2Zjohc"
								});
							case f.c.FREQUENT:
								return o.fbt._("FREQUENT", null, {
									hk: "3I2QgC"
								});
							case f.c.LOW:
							default:
								return o.fbt._("LOW", null, {
									hk: "1qOHXh"
								})
						}
					})(L),
					P = (e => {
						switch (e) {
							case f.c.OFF:
								return r.a.createElement(p.a, {
									name: "notification_off"
								});
							case f.c.FREQUENT:
								return r.a.createElement(p.a, {
									name: "notification_frequent"
								});
							case f.c.LOW:
							default:
								return r.a.createElement(p.a, {
									name: "notification"
								})
						}
					})(L),
					B = [{
						displayText: o.fbt._("Frequent", null, {
							hk: "21spt7"
						}),
						isSelected: L === f.c.FREQUENT,
						value: f.c.FREQUENT,
						icon: r.a.createElement(p.a, {
							name: "notification_frequent",
							className: v.a.dropdownItemIcon
						})
					}, {
						displayText: o.fbt._("Low", null, {
							hk: "2uGDVq"
						}),
						isSelected: L === f.c.LOW,
						value: f.c.LOW,
						icon: r.a.createElement(p.a, {
							name: "notification",
							className: v.a.dropdownItemIcon
						})
					}, {
						displayText: o.fbt._("Off", null, {
							hk: "4GiFvg"
						}),
						isSelected: L === f.c.OFF,
						value: f.c.OFF,
						icon: r.a.createElement(p.a, {
							name: "notification_off",
							className: v.a.dropdownItemIcon
						})
					}];
				return r.a.createElement("div", {
					className: v.a.container,
					key: N
				}, r.a.createElement("div", {
					className: v.a.subreddit
				}, r.a.createElement(h.b, {
					iconUrl: T,
					altText: o.fbt._("Subreddit icon", null, {
						hk: "gEWhf"
					}),
					shouldHideNsfwIcon: w,
					primaryColor: D,
					className: v.a.subredditIcon
				}), r.a.createElement("div", {
					className: v.a.subredditInfo
				}, r.a.createElement("h4", {
					className: v.a.subredditInfoName
				}, "r/", y), r.a.createElement("span", {
					className: v.a.subredditInfoNotification
				}, j ? o.fbt._("Community is muted", null, {
					hk: "4ntSSB"
				}) : o.fbt._("Notifications: {notification level}", [o.fbt._param("notification level", M)], {
					hk: "2YgR3R"
				})))), r.a.createElement(g.b, {
					isCompactStyle: !0,
					displayText: F,
					options: B,
					onSelect: e => {
						var t;
						j ? (E.current = e.value, u(!0)) : (C(Object(O.n)(N, y, null === (t = e.value) || void 0 === t ? void 0 : t.toLowerCase())), s(N, e.value))
					},
					buttonClassName: v.a.dropdown,
					buttonIcon: P
				}), l && r.a.createElement(m.a, {
					withOverlay: !0,
					headerText: o.fbt._("Unmute {name of subreddit to unmute}", [o.fbt._param("name of subreddit to unmute", `r/${t.name}`)], {
						hk: "4c7YXB"
					}),
					toggleModal: () => u(!1),
					modalBody: o.fbt._("Unmute {name of subreddit to unmute} to turn on notifications. This means their posts will be shown in your feeds and recommendations again.", [o.fbt._param("name of subreddit to unmute", `r/${t.name}`)], {
						hk: "2Slx6q"
					}),
					actionText: o.fbt._("Yes, Unmute", null, {
						hk: "2kNju2"
					}),
					cancelActionText: o.fbt._("Cancel", null, {
						hk: "2TSLl5"
					}),
					onConfirm: () => {
						var e;
						C(Object(x.b)({
							subredditId: N
						})), n({
							subredditId: N,
							notificationLevel: null !== (e = E.current) && void 0 !== e ? e : f.c.LOW
						})
					}
				}))
			};
			var N = n("./src/reddit/components/Settings/Notifications/LoadingSection.tsx"),
				k = n("./src/reddit/selectors/user.ts");
			const y = Object(i.c)({
					cursor: k.ub,
					hasError: k.vb,
					hasNextPage: k.wb,
					isPending: k.xb,
					subreddits: k.yb
				}),
				w = Object(c.b)(y, e => ({
					clearSubscribedSubredditsList: () => e(Object(d.c)()),
					fetchSubscribesSubreddits: t => e(Object(d.b)(t)),
					updateSubredditMuteAndNotificationLevelSettings: t => {
						e(Object(l.g)(t))
					},
					updateSubredditNotificationLevel: (t, n) => e(Object(u.d)({
						subredditId: t,
						notificationLevel: n,
						successCallback: () => e(Object(d.c)({
							subredditId: t,
							notificationLevel: n
						}))
					}))
				}));
			t.default = w(e => {
				let {
					fetchSubscribesSubreddits: t,
					subreddits: n,
					cursor: i,
					hasNextPage: c,
					hasError: d,
					isPending: l,
					updateSubredditMuteAndNotificationLevelSettings: u,
					updateSubredditNotificationLevel: m,
					clearSubscribedSubredditsList: p
				} = e;
				const f = Object(S.a)();
				Object(a.useEffect)(() => (f(Object(O.o)()), t({
					first: 20
				}), () => {
					p()
				}), []);
				const h = n && n.length > 0;
				return d ? r.a.createElement("span", {
					className: v.a.errorMessage,
					"data-testid": "error-message"
				}, o.fbt._("There was an issue fetching your subreddits notifications settings. Please try again later.", null, {
					hk: "1Wt132"
				})) : l && !h ? r.a.createElement(N.a, {
					rowsCount: 5
				}) : h ? r.a.createElement(r.a.Fragment, null, n.map(e => r.a.createElement(C, {
					subreddit: e,
					onSelect: m,
					onUnmute: u,
					key: e.id
				})), c && r.a.createElement(s.a, {
					onChange: e => {
						e.isIntersecting && i && t({
							after: i,
							first: 20
						})
					},
					rootMargin: "0px 0px 0px 0px",
					threshold: .5
				}, r.a.createElement("div", null)), l && r.a.createElement(N.a, {
					rowsCount: 1
				})) : r.a.createElement("span", {
					className: v.a.errorMessage,
					"data-testid": "error-message"
				}, o.fbt._("You do not have subscribed subreddits.", null, {
					hk: "20pdSk"
				}))
			})
		},
		"./src/reddit/components/Settings/Notifications/LoadingSection.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return d
			}));
			var s = n("./node_modules/lodash/times.js"),
				o = n.n(s),
				i = n("./node_modules/react/index.js"),
				a = n.n(i),
				r = n("./src/reddit/components/Settings/Notifications/index.m.less"),
				c = n.n(r);
			const d = e => {
				let {
					rowsCount: t
				} = e;
				return a.a.createElement("div", {
					role: "alert",
					"aria-busy": "true"
				}, a.a.createElement("div", {
					className: c.a.loadingSectionHeader
				}), o()(t, e => a.a.createElement("div", {
					className: c.a.loadingToggleWrapper,
					key: e
				}, a.a.createElement("span", {
					className: c.a.loadingToggleName
				}), a.a.createElement("span", {
					className: c.a.loadingToggleButton
				}))))
			}
		},
		"./src/reddit/components/Settings/Notifications/index.m.less": function(e, t, n) {
			e.exports = {
				loadingSectionHeader: "_1JAbJoDWgS5w77rjLy_a7c",
				glimmer: "_1VqfnmhCxLKQ6Pb1zId6Ip",
				loadingToggleWrapper: "_3hfCPonrfNQjCQe_kHaSDY",
				loadingToggleName: "_2nmcEilpCLrMUDYAFuRPhZ",
				loadingToggleButton: "RXOVV5JR-ysmH1CtOhOzv",
				errorMessage: "_3wk25QxRP-Wk1zL9JaaNAH",
				ModPnSettingsSubredditList: "_1Wq_iiOCv9Zlu6GiZmzuEY",
				modPnSettingsSubredditList: "_1Wq_iiOCv9Zlu6GiZmzuEY",
				communityAlert: "_1kjkPylfnJVOQOlvkz5mRN",
				header: "_3ppHgcPj1O00wgJFJhnPgl",
				arrow: "_2TrPYhNtc4V7otMW_Lfj3L"
			}
		},
		"./src/reddit/controls/DropdownSelector/index.m.less": function(e, t, n) {
			e.exports = {
				dropdownMenu: "_1PLoXiZH4WKzHTfmYIt34X",
				selector: "apk_M-7ks6NcaiMN8cotM",
				selectorContent: "Ot99igbaJ5id3P1tw6wow",
				disabled: "FVIZ8GUq5tMGZlJ7y28ll",
				compact: "_1qaMsHCBrTmejbIUPjsRVI",
				caretDown: "_2i4dyr-iTBOmkZ4fL_M70P",
				topics: "qWs3cMcSjquK-OXl-9jH5",
				loadingIcon: "_3WxhmmhQ3cYt1J7mtfcoKG",
				menuItems: "_3ssvFhIB2HAXL261eWf7G0",
				isClosed: "_3sZzbLftdYnJNnJ7m7ImmO",
				menuOption: "_1Qm1phX3yfiJHnjgi_O_9V",
				buttonIcon: "_1J0h3Uv7HEaVZiJLcCUlQw"
			}
		},
		"./src/reddit/controls/DropdownSelector/index.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return m
			}));
			var s = n("./node_modules/react/index.js"),
				o = n.n(s),
				i = n("./src/reddit/controls/DropdownSelector/index.m.less"),
				a = n.n(i),
				r = n("./src/lib/classNames/index.ts"),
				c = n("./src/reddit/controls/Dropdown/Row.tsx"),
				d = n("./src/reddit/controls/LoadingIcon/index.tsx"),
				l = n("./src/reddit/icons/fonts/index.tsx");
			const u = e => {
				e.preventDefault()
			};
			class m extends o.a.Component {
				constructor() {
					super(...arguments), this.dropdownButton = o.a.createRef(), this.menuItems = o.a.createRef(), this.containerRef = o.a.createRef(), this.state = {
						isOpen: !1
					}, this.handleDocumentClick = e => {
						this.containerRef && this.containerRef.current && (this.containerRef.current.contains(e.target) || this.setState({
							isOpen: !1
						}))
					}, this.onSelectOption = (e, t, n) => {
						const {
							onSelect: s
						} = this.props;
						e.preventDefault(), e.stopPropagation(), e.nativeEvent.stopPropagation(), s(t), n && this.dropdownButton.current && this.dropdownButton.current.focus(), this.setState({
							isOpen: !1
						})
					}, this.onOptionClick = (e, t) => {
						this.onSelectOption(e, t)
					}, this.handleDropdownClick = e => {
						e.preventDefault(), e.stopPropagation(), this.props.onOpen && this.props.onOpen(), this.setState({
							isOpen: !this.state.isOpen
						})
					}, this.handleDropdownBlur = e => {
						let t = !1;
						if (e.relatedTarget === this.dropdownButton.current) t = !0;
						else {
							if (!this.menuItems.current) return;
							const n = this.menuItems.current.getElementsByClassName(a.a.menuOption);
							for (let s = 0; s < n.length; s++) e.relatedTarget === n[s] && (t = !0)
						}
						this.setState({
							isOpen: t
						})
					}, this.handleDropdownKeyDown = e => {
						if (!this.state.isOpen && [40, 32, 13].includes(e.keyCode)) return e.preventDefault(), void this.setState({
							isOpen: !0
						}, this.focusOnFirstOption);
						40 === e.keyCode && (e.preventDefault(), this.focusOnFirstOption()), 27 === e.keyCode && this.state.isOpen && (e.stopPropagation(), e.nativeEvent.stopPropagation(), e.nativeEvent.stopImmediatePropagation(), this.setState({
							isOpen: !1
						}))
					}, this.handleOptionKeyDown = (e, t) => {
						if (32 === e.keyCode || 13 === e.keyCode) this.onSelectOption(e, t, !0);
						else if (38 === e.keyCode || 40 === e.keyCode) {
							if (e.preventDefault(), !this.menuItems.current) return;
							const t = this.menuItems.current.getElementsByClassName(a.a.menuOption);
							for (let n = 0; n < t.length; n++) t[n] === e.target && (38 === e.keyCode && n > 0 && t[n - 1].focus(), 40 === e.keyCode && n < t.length - 1 && t[n + 1].focus())
						}
					}
				}
				componentDidMount() {
					document.body.addEventListener("click", this.handleDocumentClick, !1)
				}
				componentWillUnmount() {
					document.body.removeEventListener("click", this.handleDocumentClick, !1)
				}
				focusOnFirstOption() {
					if (!this.menuItems.current) return;
					const e = this.menuItems.current.getElementsByClassName(a.a.menuOption);
					e.length && e[0].focus()
				}
				getDropdownMenuItems() {
					const {
						options: e,
						showSelectedCheckmark: t,
						isTopicsStyle: n,
						menuOptionClassName: s
					} = this.props;
					return e.map((e, i) => o.a.createElement(c.b, {
						key: i + e.displayText,
						className: Object(r.a)(a.a.menuOption, s, {
							[a.a.topics]: n
						}),
						noIcon: Boolean(e.icon),
						onKeydown: t => this.handleOptionKeyDown(t, e),
						onMouseDown: t => this.onOptionClick(t, e),
						onBlur: this.handleDropdownBlur,
						showSelectedCheckmark: t,
						isSelected: void 0 !== e.isSelected ? e.isSelected : void 0,
						isTopicsStyle: n
					}, e.icon && e.icon, e.displayText))
				}
				render() {
					const {
						buttonClassName: e,
						className: t,
						displayText: n,
						isCompactStyle: s,
						isTopicsStyle: i,
						menuItemsClassName: c,
						name: m,
						isSaving: p,
						buttonIcon: f,
						disabled: h
					} = this.props, {
						isOpen: b
					} = this.state;
					return o.a.createElement("div", {
						ref: this.containerRef,
						id: this.props.id,
						className: Object(r.a)(a.a.dropdownMenu, t, {
							[a.a.topics]: i
						})
					}, o.a.createElement("button", {
						onClick: h ? void 0 : this.handleDropdownClick,
						className: Object(r.a)(e, a.a.selector, {
							[a.a.compact]: s
						}, {
							[a.a.topics]: i
						}, {
							[a.a.disabled]: h
						}),
						name: m,
						role: "menu",
						ref: this.dropdownButton,
						onBlur: h ? void 0 : this.handleDropdownBlur,
						onKeyDown: h ? void 0 : this.handleDropdownKeyDown
					}, o.a.createElement("span", {
						className: a.a.selectorContent,
						tabIndex: -1
					}, f && o.a.createElement("span", {
						className: a.a.buttonIcon
					}, f), n), h ? null : p ? o.a.createElement(d.a, {
						sizePx: 8,
						className: a.a.loadingIcon
					}) : o.a.createElement(l.a, {
						name: "caret_down"
					})), o.a.createElement("div", {
						className: Object(r.a)(a.a.menuItems, c, {
							[a.a.topics]: i,
							[a.a.isClosed]: !b
						}),
						onMouseDown: u,
						ref: this.menuItems
					}, !h && b && this.getDropdownMenuItems()))
				}
			}
			t.b = m
		},
		"./src/reddit/hooks/useExperimentVariant.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return i
			}));
			var s = n("./node_modules/react-redux/es/index.js"),
				o = n("./src/reddit/helpers/chooseVariant/index.ts");

			function i(e) {
				let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : o.a;
				return Object(s.e)(n => Object(o.c)(n, {
					experimentName: e,
					experimentEligibilitySelector: t
				}))
			}
		}
	}
]);
//# sourceMappingURL=https://www.redditstatic.com/desktop2x/CommunityNotificationSettings.8cc13d6fe553e6c9a45a.js.map