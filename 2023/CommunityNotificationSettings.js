// https://www.redditstatic.com/desktop2x/CommunityNotificationSettings.288085af6f3eaae25504.js
// Retrieved at 6/16/2023, 4:10:04 PM by Reddit Dataminer v1.0.0
(window.__LOADABLE_LOADED_CHUNKS__ = window.__LOADABLE_LOADED_CHUNKS__ || []).push([
	["CommunityNotificationSettings"], {
		"./node_modules/lodash/times.js": function(e, t, n) {
			var o = n("./node_modules/lodash/_baseTimes.js"),
				s = n("./node_modules/lodash/_castFunction.js"),
				i = n("./node_modules/lodash/toInteger.js"),
				a = 9007199254740991,
				r = 4294967295,
				c = Math.min;
			e.exports = function(e, t) {
				if ((e = i(e)) < 1 || e > a) return [];
				var n = r,
					d = c(e, r);
				t = s(t), e -= r;
				for (var l = o(d, t); ++n < e;) t(n);
				return l
			}
		},
		"./src/reddit/components/ModalStyledComponents/Modal.tsx": function(e, t, n) {
			"use strict";
			var o = n("./node_modules/react/index.js"),
				s = n.n(o),
				i = n("./src/higherOrderComponents/asModal/index.tsx"),
				a = n("./src/reddit/components/ModalStyledComponents/index.tsx"),
				r = n("./src/reddit/controls/TextButton/index.tsx"),
				c = n("./src/reddit/layout/twoCol/ExpandLeft/index.tsx");
			const d = e => e.preventDefault();
			t.a = Object(i.a)(e => {
				const t = !!e.cancelActionText,
					n = !(!e.actionText || !e.onConfirm);
				return s.a.createElement(a.e, {
					style: e.style
				}, s.a.createElement(a.i, null, s.a.createElement(c.a, null, s.a.createElement(a.q, null, e.headerText), !e.hideCancel && s.a.createElement(r.a, {
					onClick: () => {
						e.trackCancel && e.trackCancel(), e.toggleModal()
					}
				}, s.a.createElement(a.b, null)))), s.a.createElement(a.l, null, e.modalBody), (t || n) && s.a.createElement(a.g, null, t && s.a.createElement(a.a, {
					"data-redditstyle": !0,
					onMouseDown: d,
					onClick: () => {
						e.trackCancel && e.trackCancel(), e.toggleModal()
					}
				}, e.cancelActionText), n && s.a.createElement(a.u, {
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
			var o = n("./node_modules/@researchgate/react-intersection-observer/lib/es/index.js"),
				s = n("./node_modules/fbt/lib/FbtPublic.js"),
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
				_ = n("./src/reddit/helpers/trackers/subredditMuting.ts"),
				x = n("./src/reddit/hooks/useExperimentVariant.ts"),
				S = n("./src/reddit/hooks/useTracking.ts"),
				C = n("./src/reddit/components/Settings/Notifications/CommunityNotificationSettings/index.m.less"),
				E = n.n(C);
			const v = e => {
				let {
					subreddit: t,
					onUnmute: n,
					onSelect: o
				} = e;
				var i, c;
				const d = Object(x.a)(b.M),
					[l, u] = Object(a.useState)(!1),
					C = Object(a.useRef)(),
					v = Object(S.a)(),
					{
						id: N,
						notificationLevel: k,
						name: y,
						isNsfw: w,
						isMuted: I
					} = t,
					L = I && d === b.Xd,
					j = L ? f.c.OFF : k,
					T = t.styles.icon || (null === (i = t.styles.legacyIcon) || void 0 === i ? void 0 : i.url),
					D = null !== (c = t.styles.primaryColor) && void 0 !== c ? c : void 0,
					M = (e => {
						switch (e) {
							case f.c.OFF:
								return s.fbt._("Off", null, {
									hk: "1JWIiA"
								});
							case f.c.FREQUENT:
								return s.fbt._("High Frequency", null, {
									hk: "1W8tQh"
								});
							case f.c.LOW:
							default:
								return s.fbt._("Low", null, {
									hk: "2YMQmI"
								})
						}
					})(j),
					F = (e => {
						switch (e) {
							case f.c.OFF:
								return s.fbt._("OFF", null, {
									hk: "2Zjohc"
								});
							case f.c.FREQUENT:
								return s.fbt._("FREQUENT", null, {
									hk: "3I2QgC"
								});
							case f.c.LOW:
							default:
								return s.fbt._("LOW", null, {
									hk: "1qOHXh"
								})
						}
					})(j),
					B = (e => {
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
					})(j),
					P = [{
						displayText: s.fbt._("Frequent", null, {
							hk: "21spt7"
						}),
						isSelected: j === f.c.FREQUENT,
						value: f.c.FREQUENT,
						icon: r.a.createElement(p.a, {
							name: "notification_frequent",
							className: E.a.dropdownItemIcon
						})
					}, {
						displayText: s.fbt._("Low", null, {
							hk: "2uGDVq"
						}),
						isSelected: j === f.c.LOW,
						value: f.c.LOW,
						icon: r.a.createElement(p.a, {
							name: "notification",
							className: E.a.dropdownItemIcon
						})
					}, {
						displayText: s.fbt._("Off", null, {
							hk: "4GiFvg"
						}),
						isSelected: j === f.c.OFF,
						value: f.c.OFF,
						icon: r.a.createElement(p.a, {
							name: "notification_off",
							className: E.a.dropdownItemIcon
						})
					}];
				return r.a.createElement("div", {
					className: E.a.container,
					key: N
				}, r.a.createElement("div", {
					className: E.a.subreddit
				}, r.a.createElement(h.b, {
					iconUrl: T,
					altText: s.fbt._("Subreddit icon", null, {
						hk: "gEWhf"
					}),
					shouldHideNsfwIcon: w,
					primaryColor: D,
					className: E.a.subredditIcon
				}), r.a.createElement("div", {
					className: E.a.subredditInfo
				}, r.a.createElement("h4", {
					className: E.a.subredditInfoName
				}, "r/", y), r.a.createElement("span", {
					className: E.a.subredditInfoNotification
				}, L ? s.fbt._("Community is muted", null, {
					hk: "4ntSSB"
				}) : s.fbt._("Notifications: {notification level}", [s.fbt._param("notification level", M)], {
					hk: "2YgR3R"
				})))), r.a.createElement(g.b, {
					isCompactStyle: !0,
					displayText: F,
					options: P,
					onSelect: e => {
						var t;
						L ? (C.current = e.value, u(!0)) : (v(Object(O.n)(N, y, null === (t = e.value) || void 0 === t ? void 0 : t.toLowerCase())), o(N, e.value))
					},
					buttonClassName: E.a.dropdown,
					buttonIcon: B
				}), l && r.a.createElement(m.a, {
					withOverlay: !0,
					headerText: s.fbt._("Unmute {name of subreddit to unmute}", [s.fbt._param("name of subreddit to unmute", `r/${t.name}`)], {
						hk: "4c7YXB"
					}),
					toggleModal: () => u(!1),
					modalBody: s.fbt._("Unmute {name of subreddit to unmute} to turn on notifications. This means their posts will be shown in your feeds and recommendations again.", [s.fbt._param("name of subreddit to unmute", `r/${t.name}`)], {
						hk: "2Slx6q"
					}),
					actionText: s.fbt._("Yes, Unmute", null, {
						hk: "2kNju2"
					}),
					cancelActionText: s.fbt._("Cancel", null, {
						hk: "2TSLl5"
					}),
					onConfirm: () => {
						var e;
						v(Object(_.b)({
							subredditId: N
						})), n({
							subredditId: N,
							notificationLevel: null !== (e = C.current) && void 0 !== e ? e : f.c.LOW
						})
					}
				}))
			};
			var N = n("./src/reddit/components/Settings/Notifications/LoadingSection.tsx"),
				k = n("./src/reddit/selectors/user.ts");
			const y = Object(i.c)({
					cursor: k.vb,
					hasError: k.wb,
					hasNextPage: k.xb,
					isPending: k.yb,
					subreddits: k.zb
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
					className: E.a.errorMessage,
					"data-testid": "error-message"
				}, s.fbt._("There was an issue fetching your subreddits notifications settings. Please try again later.", null, {
					hk: "1Wt132"
				})) : l && !h ? r.a.createElement(N.a, {
					rowsCount: 5
				}) : h ? r.a.createElement(r.a.Fragment, null, n.map(e => r.a.createElement(v, {
					subreddit: e,
					onSelect: m,
					onUnmute: u,
					key: e.id
				})), c && r.a.createElement(o.a, {
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
					className: E.a.errorMessage,
					"data-testid": "error-message"
				}, s.fbt._("You do not have subscribed subreddits.", null, {
					hk: "20pdSk"
				}))
			})
		},
		"./src/reddit/components/Settings/Notifications/LoadingSection.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return d
			}));
			var o = n("./node_modules/lodash/times.js"),
				s = n.n(o),
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
				}), s()(t, e => a.a.createElement("div", {
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
			var o = n("./node_modules/react/index.js"),
				s = n.n(o),
				i = n("./src/reddit/controls/DropdownSelector/index.m.less"),
				a = n.n(i),
				r = n("./src/lib/classNames/index.ts"),
				c = n("./src/reddit/controls/Dropdown/Row.tsx"),
				d = n("./src/reddit/controls/LoadingIcon/index.tsx"),
				l = n("./src/reddit/icons/fonts/index.tsx");
			const u = e => {
				e.preventDefault()
			};
			class m extends s.a.Component {
				constructor() {
					super(...arguments), this.dropdownButton = s.a.createRef(), this.menuItems = s.a.createRef(), this.containerRef = s.a.createRef(), this.state = {
						isOpen: !1
					}, this.handleDocumentClick = e => {
						this.containerRef && this.containerRef.current && (this.containerRef.current.contains(e.target) || this.setState({
							isOpen: !1
						}))
					}, this.onSelectOption = (e, t, n) => {
						const {
							onSelect: o
						} = this.props;
						e.preventDefault(), e.stopPropagation(), e.nativeEvent.stopPropagation(), o(t), n && this.dropdownButton.current && this.dropdownButton.current.focus(), this.setState({
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
							for (let o = 0; o < n.length; o++) e.relatedTarget === n[o] && (t = !0)
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
						menuOptionClassName: o
					} = this.props;
					return e.map((e, i) => s.a.createElement(c.b, {
						key: i + e.displayText,
						className: Object(r.a)(a.a.menuOption, o, {
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
						isCompactStyle: o,
						isTopicsStyle: i,
						menuItemsClassName: c,
						name: m,
						isSaving: p,
						buttonIcon: f,
						disabled: h
					} = this.props, {
						isOpen: b
					} = this.state;
					return s.a.createElement("div", {
						ref: this.containerRef,
						id: this.props.id,
						className: Object(r.a)(a.a.dropdownMenu, t, {
							[a.a.topics]: i
						})
					}, s.a.createElement("button", {
						onClick: h ? void 0 : this.handleDropdownClick,
						className: Object(r.a)(e, a.a.selector, {
							[a.a.compact]: o
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
					}, s.a.createElement("span", {
						className: a.a.selectorContent,
						tabIndex: -1
					}, f && s.a.createElement("span", {
						className: a.a.buttonIcon
					}, f), n), h ? null : p ? s.a.createElement(d.a, {
						sizePx: 8,
						className: a.a.loadingIcon
					}) : s.a.createElement(l.a, {
						name: "caret_down"
					})), s.a.createElement("div", {
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
		}
	}
]);
//# sourceMappingURL=https://www.redditstatic.com/desktop2x/CommunityNotificationSettings.288085af6f3eaae25504.js.map