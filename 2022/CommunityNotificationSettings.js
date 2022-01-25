// https://www.redditstatic.com/desktop2x/CommunityNotificationSettings.771dab58a0c55e8e58d9.js
// Retrieved at 1/25/2022, 1:40:03 PM by Reddit Dataminer v1.0.0
(window.__LOADABLE_LOADED_CHUNKS__ = window.__LOADABLE_LOADED_CHUNKS__ || []).push([
	["CommunityNotificationSettings"], {
		"./src/reddit/actions/subreddit/notifications.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return m
			})), n.d(t, "b", (function() {
				return h
			}));
			var i = n("./node_modules/fbt/lib/FbtPublic.js"),
				s = n("./src/lib/makeActionCreator/index.ts"),
				o = n("./src/reddit/actions/notificationSettingsLayout/index.ts"),
				a = n("./src/reddit/actions/notificationsInbox/index.ts"),
				r = n("./src/reddit/actions/subreddit/constants.ts"),
				c = n("./src/reddit/actions/toaster.ts"),
				d = n("./src/reddit/endpoints/subreddit/notificationSettings.ts"),
				l = n("./src/reddit/models/Subreddit/index.ts"),
				u = n("./src/reddit/models/Toast/index.ts");
			const m = Object(s.a)(r.u),
				b = Object(s.a)(r.t),
				p = Object(s.a)(r.s),
				f = e => {
					switch (e) {
						case l.b.OFF:
							return i.fbt._("Unfollowed. You won’t get updates on new activity anymore.", null, {
								hk: "3e1CJR"
							});
						case l.b.FREQUENT:
							return i.fbt._("Followed! Now you’ll get updates on new activity.", null, {
								hk: "3JzOOa"
							});
						case l.b.LOW:
							return i.fbt._("Success! You will see fewer notifications from this community in the future.", null, {
								hk: "4x3TS8"
							});
						default:
							return null
					}
				};
			const h = ({
				subredditId: e,
				notificationLevel: t,
				successCallback: n,
				undoCallback: s
			}) => async (r, h, {
				gqlContext: g
			}) => {
				var O, S, v;
				r(b());
				const w = (e => {
						switch (e) {
							case l.b.FREQUENT:
								return {
									isSubredditUpdatesInterestingPostEnabled: !0, isUpdateFromSubredditEnabled: !0
								};
							case l.b.LOW:
								return {
									isSubredditUpdatesInterestingPostEnabled: !1, isUpdateFromSubredditEnabled: !0
								};
							case l.b.OFF:
							default:
								return {
									isSubredditUpdatesInterestingPostEnabled: !1, isUpdateFromSubredditEnabled: !1
								}
						}
					})(t),
					N = await Object(d.b)(g(), e, w);
				if ((null === (S = null === (O = N.error) || void 0 === O ? void 0 : O.fields) || void 0 === S ? void 0 : S.length) || function(e) {
						return Boolean(e && e.data && e.data.updateSubredditNotificationSettings)
					}(N.body) && (null === (v = N.body.data.updateSubredditNotificationSettings.errors) || void 0 === v ? void 0 : v.length)) return r(p()), r(Object(c.f)({
					kind: u.b.Error,
					text: i.fbt._("Failed to change the frequency of notifications from this community, please try again.", null, {
						hk: "4avFFV"
					})
				}));
				N.ok && (r(Object(o.c)({
					subredditId: e,
					notificationLevel: t
				})), r(m({
					subredditAboutInfo: {
						[e]: {
							notificationLevel: t
						}
					}
				})), n && n(), r(s ? Object(c.f)(Object(c.e)(f(t), u.b.Undo, i.fbt._("Undo", null, {
					hk: "46OwLP"
				}), Object(a.i)(e, s))) : Object(c.f)(Object(c.e)(f(t), u.b.SuccessCommunityGreen))))
			}
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
			var i = n("./node_modules/@researchgate/react-intersection-observer/lib/es/index.js"),
				s = n("./node_modules/fbt/lib/FbtPublic.js"),
				o = n("./node_modules/reselect/es/index.js"),
				a = n("./node_modules/react/index.js"),
				r = n.n(a),
				c = n("./node_modules/react-redux/es/index.js"),
				d = n("./src/reddit/actions/notificationSettingsLayout/index.ts"),
				l = n("./src/reddit/actions/subreddit/notifications.ts"),
				u = n("./src/reddit/icons/fonts/index.tsx"),
				m = n("./src/reddit/models/Subreddit/index.ts");
			var b = n("./src/reddit/components/SubredditIcon/index.tsx"),
				p = n("./src/reddit/controls/DropdownSelector/index.tsx"),
				f = n("./src/reddit/helpers/trackers/notifications.ts"),
				h = n("./src/reddit/hooks/useTracking.ts"),
				g = n("./src/reddit/components/Settings/Notifications/CommunityNotificationSettings/index.m.less"),
				O = n.n(g);
			const S = ({
				subreddit: e,
				onSelect: t
			}) => {
				var n, i;
				const o = Object(h.a)(),
					{
						id: a,
						notificationLevel: c,
						name: d,
						isNsfw: l
					} = e,
					g = e.styles.icon || (null === (n = e.styles.legacyIcon) || void 0 === n ? void 0 : n.url),
					S = null !== (i = e.styles.primaryColor) && void 0 !== i ? i : void 0,
					v = (e => {
						switch (e) {
							case m.b.OFF:
								return "Off";
							case m.b.FREQUENT:
								return "High Frequency";
							case m.b.LOW:
							default:
								return "Low"
						}
					})(c),
					w = (e => {
						switch (e) {
							case m.b.OFF:
								return r.a.createElement(u.a, {
									name: "notification_off"
								});
							case m.b.FREQUENT:
								return r.a.createElement(u.a, {
									name: "notification_frequent"
								});
							case m.b.LOW:
							default:
								return r.a.createElement(u.a, {
									name: "notification"
								})
						}
					})(c),
					N = [{
						displayText: s.fbt._("Frequent", null, {
							hk: "21spt7"
						}),
						isSelected: c === m.b.FREQUENT,
						value: m.b.FREQUENT,
						icon: r.a.createElement(u.a, {
							name: "notification_frequent",
							className: O.a.dropdownItemIcon
						})
					}, {
						displayText: s.fbt._("Low", null, {
							hk: "2uGDVq"
						}),
						isSelected: c === m.b.LOW,
						value: m.b.LOW,
						icon: r.a.createElement(u.a, {
							name: "notification",
							className: O.a.dropdownItemIcon
						})
					}, {
						displayText: s.fbt._("Off", null, {
							hk: "4GiFvg"
						}),
						isSelected: c === m.b.OFF,
						value: m.b.OFF,
						icon: r.a.createElement(u.a, {
							name: "notification_off",
							className: O.a.dropdownItemIcon
						})
					}];
				return r.a.createElement("div", {
					className: O.a.container,
					key: a
				}, r.a.createElement("div", {
					className: O.a.subreddit
				}, r.a.createElement(b.b, {
					iconUrl: g,
					altText: s.fbt._("Subreddit icon", null, {
						hk: "gEWhf"
					}),
					shouldHideNsfwIcon: l,
					primaryColor: S,
					className: O.a.subredditIcon
				}), r.a.createElement("div", {
					className: O.a.subredditInfo
				}, r.a.createElement("h4", {
					className: O.a.subredditInfoName
				}, "r/", d), r.a.createElement("span", {
					className: O.a.subredditInfoNotification
				}, s.fbt._("Notifications: {notification level}", [s.fbt._param("notification level", v)], {
					hk: "2YgR3R"
				})))), r.a.createElement(p.b, {
					isCompactStyle: !0,
					displayText: e.notificationLevel,
					options: N,
					onSelect: e => {
						var n;
						o(Object(f.l)(a, d, null === (n = e.value) || void 0 === n ? void 0 : n.toLowerCase())), t(a, e.value)
					},
					buttonClassName: O.a.dropdown,
					buttonIcon: w
				}))
			};
			var v = n("./src/reddit/components/Settings/Notifications/LoadingSection.tsx"),
				w = n("./src/reddit/selectors/user.ts");
			const N = Object(o.c)({
					cursor: w.kb,
					hasError: w.lb,
					hasNextPage: w.mb,
					isPending: w.nb,
					subreddits: w.ob
				}),
				y = Object(c.b)(N, e => ({
					clearSubscribedSubredditsList: () => e(Object(d.c)()),
					fetchSubscribesSubreddits: t => e(Object(d.b)(t)),
					updateSubredditNotificationLevel: (t, n) => e(Object(l.b)({
						subredditId: t,
						notificationLevel: n,
						successCallback: () => e(Object(d.c)({
							subredditId: t,
							notificationLevel: n
						}))
					}))
				}));
			t.default = y(({
				fetchSubscribesSubreddits: e,
				subreddits: t,
				cursor: n,
				hasNextPage: o,
				hasError: c,
				isPending: d,
				updateSubredditNotificationLevel: l,
				clearSubscribedSubredditsList: u
			}) => {
				const m = Object(h.a)();
				Object(a.useEffect)(() => (m(Object(f.m)()), e({
					first: 20
				}), () => {
					u()
				}), []);
				const b = t && t.length > 0;
				return c ? r.a.createElement("span", {
					className: O.a.errorMessage,
					"data-testid": "error-message"
				}, s.fbt._("There was an issue fetching your subreddits notifications settings. Please try again later.", null, {
					hk: "1Wt132"
				})) : d && !b ? r.a.createElement(v.a, {
					rowsCount: 5
				}) : b ? r.a.createElement(r.a.Fragment, null, t.map(e => r.a.createElement(S, {
					subreddit: e,
					onSelect: l,
					key: e.id
				})), o && r.a.createElement(i.a, {
					onChange: t => {
						t.isIntersecting && n && e({
							after: n,
							first: 20
						})
					},
					rootMargin: "0px 0px 0px 0px",
					threshold: .5
				}, r.a.createElement("div", null)), d && r.a.createElement(v.a, {
					rowsCount: 1
				})) : r.a.createElement("span", {
					className: O.a.errorMessage,
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
			var i = n("./node_modules/lodash/times.js"),
				s = n.n(i),
				o = n("./node_modules/react/index.js"),
				a = n.n(o),
				r = n("./src/reddit/components/Settings/Notifications/index.m.less"),
				c = n.n(r);
			const d = ({
				rowsCount: e
			}) => a.a.createElement("div", {
				role: "alert",
				"aria-busy": "true"
			}, a.a.createElement("div", {
				className: c.a.loadingSectionHeader
			}), s()(e, e => a.a.createElement("div", {
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
				return m
			}));
			var i = n("./node_modules/react/index.js"),
				s = n.n(i),
				o = n("./src/reddit/controls/DropdownSelector/index.m.less"),
				a = n.n(o),
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
							onSelect: i
						} = this.props;
						e.preventDefault(), e.stopPropagation(), e.nativeEvent.stopPropagation(), i(t), n && this.dropdownButton.current && this.dropdownButton.current.focus(), this.setState({
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
							for (let i = 0; i < n.length; i++) e.relatedTarget === n[i] && (t = !0)
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
					return e.map((e, i) => s.a.createElement(c.b, {
						key: i + e.displayText,
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
						isCompactStyle: i,
						isTopicsStyle: o,
						menuItemsClassName: c,
						name: m,
						isSaving: b,
						buttonIcon: p
					} = this.props, {
						isOpen: f
					} = this.state;
					return s.a.createElement("div", {
						ref: this.containerRef,
						id: this.props.id,
						className: Object(r.a)(a.a.dropdownMenu, t, {
							[a.a.topics]: o
						})
					}, s.a.createElement("button", {
						onClick: this.handleDropdownClick,
						className: Object(r.a)(e, a.a.selector, {
							[a.a.compact]: i
						}, {
							[a.a.topics]: o
						}),
						name: m,
						role: "menu",
						ref: this.dropdownButton,
						onBlur: this.handleDropdownBlur,
						onKeyDown: this.handleDropdownKeyDown
					}, s.a.createElement("span", {
						className: a.a.selectorContent,
						tabIndex: -1
					}, p && s.a.createElement("span", {
						className: a.a.buttonIcon
					}, p), n), b ? s.a.createElement(d.a, {
						sizePx: 8,
						className: a.a.loadingIcon
					}) : s.a.createElement(l.a, {
						name: "caret_down"
					})), s.a.createElement("div", {
						className: Object(r.a)(a.a.menuItems, c, {
							[a.a.topics]: o
						}),
						onMouseDown: u,
						ref: this.menuItems
					}, f && this.getDropdownMenuItems()))
				}
			}
			t.b = m
		}
	}
]);
//# sourceMappingURL=https://www.redditstatic.com/desktop2x/CommunityNotificationSettings.771dab58a0c55e8e58d9.js.map