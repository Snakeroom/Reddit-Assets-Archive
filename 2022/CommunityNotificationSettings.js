// https://www.redditstatic.com/desktop2x/CommunityNotificationSettings.99a20d839f8d1b9295a5.js
// Retrieved at 1/10/2022, 3:50:04 PM by Reddit Dataminer v1.0.0
(window.__LOADABLE_LOADED_CHUNKS__ = window.__LOADABLE_LOADED_CHUNKS__ || []).push([
	["CommunityNotificationSettings"], {
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
				i = n("./node_modules/react/index.js"),
				a = n.n(i),
				r = n("./src/reddit/icons/fonts/index.tsx"),
				c = n("./src/reddit/models/Subreddit/index.ts");
			var d = n("./src/reddit/components/SubredditIcon/index.tsx"),
				l = n("./src/reddit/controls/DropdownSelector/index.tsx"),
				m = n("./src/reddit/components/Settings/Notifications/CommunityNotificationSettings/index.m.less"),
				u = n.n(m);
			const p = ({
				subreddit: e,
				onSelect: t
			}) => {
				var n, s;
				const {
					id: i,
					notificationLevel: m,
					name: p,
					isNsfw: f
				} = e, h = e.styles.icon || (null === (n = e.styles.legacyIcon) || void 0 === n ? void 0 : n.url), g = null !== (s = e.styles.primaryColor) && void 0 !== s ? s : void 0, b = (e => {
					switch (e) {
						case c.b.OFF:
							return "Off";
						case c.b.FREQUENT:
							return "High Frequency";
						case c.b.LOW:
						default:
							return "Low"
					}
				})(m), N = (e => {
					switch (e) {
						case c.b.OFF:
							return a.a.createElement(r.a, {
								name: "notification_off"
							});
						case c.b.FREQUENT:
							return a.a.createElement(r.a, {
								name: "notification_frequent"
							});
						case c.b.LOW:
						default:
							return a.a.createElement(r.a, {
								name: "notification"
							})
					}
				})(m), O = [{
					displayText: o.fbt._("Frequent", null, {
						hk: "21spt7"
					}),
					isSelected: m === c.b.FREQUENT,
					value: c.b.FREQUENT,
					icon: a.a.createElement(r.a, {
						name: "notification_frequent",
						className: u.a.dropdownItemIcon
					})
				}, {
					displayText: o.fbt._("Low", null, {
						hk: "2uGDVq"
					}),
					isSelected: m === c.b.LOW,
					value: c.b.LOW,
					icon: a.a.createElement(r.a, {
						name: "notification",
						className: u.a.dropdownItemIcon
					})
				}, {
					displayText: o.fbt._("Off", null, {
						hk: "4GiFvg"
					}),
					isSelected: m === c.b.OFF,
					value: c.b.OFF,
					icon: a.a.createElement(r.a, {
						name: "notification_off",
						className: u.a.dropdownItemIcon
					})
				}];
				return a.a.createElement("div", {
					className: u.a.container,
					key: i
				}, a.a.createElement("div", {
					className: u.a.subreddit
				}, a.a.createElement(d.b, {
					iconUrl: h,
					altText: o.fbt._("Subreddit icon", null, {
						hk: "gEWhf"
					}),
					shouldHideNsfwIcon: f,
					primaryColor: g,
					className: u.a.subredditIcon
				}), a.a.createElement("div", {
					className: u.a.subredditInfo
				}, a.a.createElement("h4", {
					className: u.a.subredditInfoName
				}, "r/", p), a.a.createElement("span", {
					className: u.a.subredditInfoNotification
				}, "Notifications: ", b))), a.a.createElement(l.b, {
					isCompactStyle: !0,
					displayText: e.notificationLevel,
					options: O,
					onSelect: e => {
						t(i, e.value)
					},
					buttonClassName: u.a.dropdown,
					buttonIcon: N
				}))
			};
			var f = n("./src/reddit/components/Settings/Notifications/LoadingSection.tsx");
			t.default = ({
				fetchSubscribesSubreddits: e,
				subreddits: t,
				cursor: n,
				hasNextPage: r,
				hasError: c,
				isPending: d,
				updateSubredditNotificationLevel: l,
				clearSubscribedSubredditsList: m
			}) => {
				Object(i.useEffect)(() => (e({
					first: 20
				}), () => {
					m()
				}), []);
				const h = t && t.length > 0;
				return c ? a.a.createElement("span", {
					className: u.a.errorMessage,
					"data-testid": "error-message"
				}, o.fbt._("There was an issue fetching your subreddits notifications settings. Please try again later.", null, {
					hk: "1Wt132"
				})) : d && !h ? a.a.createElement(f.a, {
					rowsCount: 5
				}) : h ? a.a.createElement(a.a.Fragment, null, t.map(e => a.a.createElement(p, {
					subreddit: e,
					onSelect: l,
					key: e.id
				})), r && a.a.createElement(s.a, {
					onChange: t => {
						t.isIntersecting && n && e({
							after: n,
							first: 20
						})
					},
					rootMargin: "0px 0px 0px 0px",
					threshold: .5
				}, a.a.createElement("div", null)), d && a.a.createElement(f.a, {
					rowsCount: 1
				})) : a.a.createElement("span", {
					className: u.a.errorMessage,
					"data-testid": "error-message"
				}, o.fbt._("You do not have subscribed subreddits.", null, {
					hk: "20pdSk"
				}))
			}
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
			const d = ({
				rowsCount: e
			}) => a.a.createElement("div", {
				role: "alert",
				"aria-busy": "true"
			}, a.a.createElement("div", {
				className: c.a.loadingSectionHeader
			}), o()(e, e => a.a.createElement("div", {
				className: c.a.loadingToggleWrapper,
				key: e
			}, a.a.createElement("span", {
				className: c.a.loadingToggleName
			}), a.a.createElement("span", {
				className: c.a.loadingToggleButton
			}))))
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
				compact: "_1qaMsHCBrTmejbIUPjsRVI",
				caretDown: "_2i4dyr-iTBOmkZ4fL_M70P",
				topics: "qWs3cMcSjquK-OXl-9jH5",
				loadingIcon: "_3WxhmmhQ3cYt1J7mtfcoKG",
				menuItems: "_3ssvFhIB2HAXL261eWf7G0",
				menuOption: "_1Qm1phX3yfiJHnjgi_O_9V",
				buttonIcon: "_1J0h3Uv7HEaVZiJLcCUlQw"
			}
		},
		"./src/reddit/controls/DropdownSelector/index.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return u
			}));
			var s = n("./node_modules/react/index.js"),
				o = n.n(s),
				i = n("./src/reddit/controls/DropdownSelector/index.m.less"),
				a = n.n(i),
				r = n("./src/lib/classNames/index.ts"),
				c = n("./src/reddit/controls/Dropdown/Row.tsx"),
				d = n("./src/reddit/controls/LoadingIcon/index.tsx"),
				l = n("./src/reddit/icons/fonts/index.tsx");
			const m = e => {
				e.preventDefault()
			};
			class u extends o.a.Component {
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
						e.preventDefault(), this.props.onOpen && this.props.onOpen(), this.setState({
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
						isTopicsStyle: n
					} = this.props;
					return e.map((e, s) => o.a.createElement(c.b, {
						key: s + e.displayText,
						className: Object(r.a)(a.a.menuOption, {
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
						name: u,
						isSaving: p,
						buttonIcon: f
					} = this.props, {
						isOpen: h
					} = this.state;
					return o.a.createElement("div", {
						ref: this.containerRef,
						id: this.props.id,
						className: Object(r.a)(a.a.dropdownMenu, t, {
							[a.a.topics]: i
						})
					}, o.a.createElement("button", {
						onClick: this.handleDropdownClick,
						className: Object(r.a)(e, a.a.selector, {
							[a.a.compact]: s
						}, {
							[a.a.topics]: i
						}),
						name: u,
						role: "menu",
						ref: this.dropdownButton,
						onBlur: this.handleDropdownBlur,
						onKeyDown: this.handleDropdownKeyDown
					}, o.a.createElement("span", {
						className: a.a.selectorContent,
						tabIndex: -1
					}, f && o.a.createElement("span", {
						className: a.a.buttonIcon
					}, f), n), p ? o.a.createElement(d.a, {
						sizePx: 8,
						className: a.a.loadingIcon
					}) : o.a.createElement(l.a, {
						name: "caret_down"
					})), o.a.createElement("div", {
						className: Object(r.a)(a.a.menuItems, c, {
							[a.a.topics]: i
						}),
						onMouseDown: m,
						ref: this.menuItems
					}, h && this.getDropdownMenuItems()))
				}
			}
			t.b = u
		}
	}
]);
//# sourceMappingURL=https://www.redditstatic.com/desktop2x/CommunityNotificationSettings.99a20d839f8d1b9295a5.js.map