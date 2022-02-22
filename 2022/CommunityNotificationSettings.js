// https://www.redditstatic.com/desktop2x/CommunityNotificationSettings.1a19a2ae1c7be2da0f67.js
// Retrieved at 2/22/2022, 2:40:04 PM by Reddit Dataminer v1.0.0
(window.__LOADABLE_LOADED_CHUNKS__ = window.__LOADABLE_LOADED_CHUNKS__ || []).push([
	["CommunityNotificationSettings"], {
		"./src/reddit/actions/subreddit/notifications.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return m
			})), n.d(t, "b", (function() {
				return h
			}));
			var s = n("./node_modules/fbt/lib/FbtPublic.js"),
				i = n("./src/lib/makeActionCreator/index.ts"),
				o = n("./src/reddit/actions/notificationSettingsLayout/index.ts"),
				a = n("./src/reddit/actions/notificationsInbox/index.ts"),
				r = n("./src/reddit/actions/subreddit/constants.ts"),
				d = n("./src/reddit/actions/toaster.ts"),
				c = n("./src/reddit/endpoints/subreddit/notificationSettings.ts"),
				l = n("./src/reddit/models/Subreddit/index.ts"),
				u = n("./src/reddit/models/Toast/index.ts");
			const m = Object(i.a)(r.u),
				b = Object(i.a)(r.t),
				p = Object(i.a)(r.s),
				f = e => {
					switch (e) {
						case l.b.OFF:
							return s.fbt._("Unfollowed. You won’t get updates on new activity anymore.", null, {
								hk: "3e1CJR"
							});
						case l.b.FREQUENT:
							return s.fbt._("Followed! Now you’ll get updates on new activity.", null, {
								hk: "3JzOOa"
							});
						case l.b.LOW:
							return s.fbt._("Success! You will see fewer notifications from this community in the future.", null, {
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
				undoCallback: i
			}) => async (r, h, {
				gqlContext: g
			}) => {
				var O, S, N;
				r(b());
				const v = (e => {
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
					y = await Object(c.b)(g(), e, v);
				if ((null === (S = null === (O = y.error) || void 0 === O ? void 0 : O.fields) || void 0 === S ? void 0 : S.length) || function(e) {
						return Boolean(e && e.data && e.data.updateSubredditNotificationSettings)
					}(y.body) && (null === (N = y.body.data.updateSubredditNotificationSettings.errors) || void 0 === N ? void 0 : N.length)) return r(p()), r(Object(d.f)({
					kind: u.b.Error,
					text: s.fbt._("Failed to change the frequency of notifications from this community, please try again.", null, {
						hk: "4avFFV"
					})
				}));
				y.ok && (r(Object(o.c)({
					subredditId: e,
					notificationLevel: t
				})), r(m({
					subredditAboutInfo: {
						[e]: {
							notificationLevel: t
						}
					}
				})), n && n(), r(i ? Object(d.f)(Object(d.e)(f(t), u.b.Undo, s.fbt._("Undo", null, {
					hk: "46OwLP"
				}), Object(a.i)(e, i))) : Object(d.f)(Object(d.e)(f(t), u.b.SuccessCommunityGreen))))
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
			var s = n("./node_modules/@researchgate/react-intersection-observer/lib/es/index.js"),
				i = n("./node_modules/fbt/lib/FbtPublic.js"),
				o = n("./node_modules/reselect/es/index.js"),
				a = n("./node_modules/react/index.js"),
				r = n.n(a),
				d = n("./node_modules/react-redux/es/index.js"),
				c = n("./src/reddit/actions/notificationSettingsLayout/index.ts"),
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
				var n, s;
				const o = Object(h.a)(),
					{
						id: a,
						notificationLevel: d,
						name: c,
						isNsfw: l
					} = e,
					g = e.styles.icon || (null === (n = e.styles.legacyIcon) || void 0 === n ? void 0 : n.url),
					S = null !== (s = e.styles.primaryColor) && void 0 !== s ? s : void 0,
					N = (e => {
						switch (e) {
							case m.b.OFF:
								return "Off";
							case m.b.FREQUENT:
								return "High Frequency";
							case m.b.LOW:
							default:
								return "Low"
						}
					})(d),
					v = (e => {
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
					})(d),
					y = [{
						displayText: i.fbt._("Frequent", null, {
							hk: "21spt7"
						}),
						isSelected: d === m.b.FREQUENT,
						value: m.b.FREQUENT,
						icon: r.a.createElement(u.a, {
							name: "notification_frequent",
							className: O.a.dropdownItemIcon
						})
					}, {
						displayText: i.fbt._("Low", null, {
							hk: "2uGDVq"
						}),
						isSelected: d === m.b.LOW,
						value: m.b.LOW,
						icon: r.a.createElement(u.a, {
							name: "notification",
							className: O.a.dropdownItemIcon
						})
					}, {
						displayText: i.fbt._("Off", null, {
							hk: "4GiFvg"
						}),
						isSelected: d === m.b.OFF,
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
					altText: i.fbt._("Subreddit icon", null, {
						hk: "gEWhf"
					}),
					shouldHideNsfwIcon: l,
					primaryColor: S,
					className: O.a.subredditIcon
				}), r.a.createElement("div", {
					className: O.a.subredditInfo
				}, r.a.createElement("h4", {
					className: O.a.subredditInfoName
				}, "r/", c), r.a.createElement("span", {
					className: O.a.subredditInfoNotification
				}, i.fbt._("Notifications: {notification level}", [i.fbt._param("notification level", N)], {
					hk: "2YgR3R"
				})))), r.a.createElement(p.b, {
					isCompactStyle: !0,
					displayText: e.notificationLevel,
					options: y,
					onSelect: e => {
						var n;
						o(Object(f.l)(a, c, null === (n = e.value) || void 0 === n ? void 0 : n.toLowerCase())), t(a, e.value)
					},
					buttonClassName: O.a.dropdown,
					buttonIcon: v
				}))
			};
			var N = n("./src/reddit/components/Settings/Notifications/LoadingSection.tsx"),
				v = n("./src/reddit/selectors/user.ts");
			const y = Object(o.c)({
					cursor: v.pb,
					hasError: v.qb,
					hasNextPage: v.rb,
					isPending: v.sb,
					subreddits: v.tb
				}),
				w = Object(d.b)(y, e => ({
					clearSubscribedSubredditsList: () => e(Object(c.c)()),
					fetchSubscribesSubreddits: t => e(Object(c.b)(t)),
					updateSubredditNotificationLevel: (t, n) => e(Object(l.b)({
						subredditId: t,
						notificationLevel: n,
						successCallback: () => e(Object(c.c)({
							subredditId: t,
							notificationLevel: n
						}))
					}))
				}));
			t.default = w(({
				fetchSubscribesSubreddits: e,
				subreddits: t,
				cursor: n,
				hasNextPage: o,
				hasError: d,
				isPending: c,
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
				return d ? r.a.createElement("span", {
					className: O.a.errorMessage,
					"data-testid": "error-message"
				}, i.fbt._("There was an issue fetching your subreddits notifications settings. Please try again later.", null, {
					hk: "1Wt132"
				})) : c && !b ? r.a.createElement(N.a, {
					rowsCount: 5
				}) : b ? r.a.createElement(r.a.Fragment, null, t.map(e => r.a.createElement(S, {
					subreddit: e,
					onSelect: l,
					key: e.id
				})), o && r.a.createElement(s.a, {
					onChange: t => {
						t.isIntersecting && n && e({
							after: n,
							first: 20
						})
					},
					rootMargin: "0px 0px 0px 0px",
					threshold: .5
				}, r.a.createElement("div", null)), c && r.a.createElement(N.a, {
					rowsCount: 1
				})) : r.a.createElement("span", {
					className: O.a.errorMessage,
					"data-testid": "error-message"
				}, i.fbt._("You do not have subscribed subreddits.", null, {
					hk: "20pdSk"
				}))
			})
		},
		"./src/reddit/components/Settings/Notifications/LoadingSection.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return c
			}));
			var s = n("./node_modules/lodash/times.js"),
				i = n.n(s),
				o = n("./node_modules/react/index.js"),
				a = n.n(o),
				r = n("./src/reddit/components/Settings/Notifications/index.m.less"),
				d = n.n(r);
			const c = ({
				rowsCount: e
			}) => a.a.createElement("div", {
				role: "alert",
				"aria-busy": "true"
			}, a.a.createElement("div", {
				className: d.a.loadingSectionHeader
			}), i()(e, e => a.a.createElement("div", {
				className: d.a.loadingToggleWrapper,
				key: e
			}, a.a.createElement("span", {
				className: d.a.loadingToggleName
			}), a.a.createElement("span", {
				className: d.a.loadingToggleButton
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
				disabled: "FVIZ8GUq5tMGZlJ7y28ll",
				compact: "_1qaMsHCBrTmejbIUPjsRVI",
				caretDown: "_2i4dyr-iTBOmkZ4fL_M70P",
				topics: "qWs3cMcSjquK-OXl-9jH5",
				modNotes: "_19418fPEhBETWYOoZDCwE0",
				loadingIcon: "_3WxhmmhQ3cYt1J7mtfcoKG",
				menuItems: "_3ssvFhIB2HAXL261eWf7G0",
				isClosed: "_3sZzbLftdYnJNnJ7m7ImmO",
				isModNotesStyle: "_3X4Y2xTs4XH5VgeZ7w-cv5",
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
				i = n.n(s),
				o = n("./src/reddit/controls/DropdownSelector/index.m.less"),
				a = n.n(o),
				r = n("./src/lib/classNames/index.ts"),
				d = n("./src/reddit/controls/Dropdown/Row.tsx"),
				c = n("./src/reddit/controls/LoadingIcon/index.tsx"),
				l = n("./src/reddit/icons/fonts/index.tsx");
			const u = e => {
				e.preventDefault()
			};
			class m extends i.a.Component {
				constructor() {
					super(...arguments), this.dropdownButton = i.a.createRef(), this.menuItems = i.a.createRef(), this.containerRef = i.a.createRef(), this.state = {
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
						menuOptionClassName: s,
						isModNotesStyle: o
					} = this.props;
					return e.map((e, c) => i.a.createElement(d.b, {
						key: c + e.displayText,
						className: Object(r.a)(a.a.menuOption, s, {
							[a.a.topics]: n,
							[a.a.modNotes]: o
						}),
						noIcon: Boolean(e.icon),
						onKeydown: t => this.handleOptionKeyDown(t, e),
						onMouseDown: t => this.onOptionClick(t, e),
						onBlur: this.handleDropdownBlur,
						showSelectedCheckmark: t,
						isSelected: void 0 !== e.isSelected ? e.isSelected : void 0,
						isModNotesStyle: o,
						isTopicsStyle: n
					}, o ? i.a.createElement("span", {
						className: a.a.modNotes
					}, e.icon && e.icon, e.displayText) : i.a.createElement(i.a.Fragment, null, e.icon && e.icon, e.displayText)))
				}
				render() {
					const {
						buttonClassName: e,
						className: t,
						displayText: n,
						isCompactStyle: s,
						isModNotesStyle: o,
						isTopicsStyle: d,
						menuItemsClassName: m,
						name: b,
						isSaving: p,
						buttonIcon: f,
						disabled: h
					} = this.props, {
						isOpen: g
					} = this.state;
					return i.a.createElement("div", {
						ref: this.containerRef,
						id: this.props.id,
						className: Object(r.a)(a.a.dropdownMenu, t, {
							[a.a.topics]: d
						})
					}, i.a.createElement("button", {
						onClick: h ? void 0 : this.handleDropdownClick,
						className: Object(r.a)(e, a.a.selector, {
							[a.a.compact]: s
						}, {
							[a.a.topics]: d
						}, {
							[a.a.modNotes]: o
						}, {
							[a.a.disabled]: h
						}),
						name: b,
						role: "menu",
						ref: this.dropdownButton,
						onBlur: h ? void 0 : this.handleDropdownBlur,
						onKeyDown: h ? void 0 : this.handleDropdownKeyDown
					}, i.a.createElement("span", {
						className: a.a.selectorContent,
						tabIndex: -1
					}, f && i.a.createElement("span", {
						className: Object(r.a)(a.a.buttonIcon, {
							[a.a.isModNotesStyle]: o
						})
					}, f), n), h ? null : p ? i.a.createElement(c.a, {
						sizePx: 8,
						className: a.a.loadingIcon
					}) : i.a.createElement(l.a, {
						name: "caret_down"
					})), i.a.createElement("div", {
						className: Object(r.a)(a.a.menuItems, m, {
							[a.a.topics]: d,
							[a.a.isClosed]: !g && o,
							[a.a.isModNotesStyle]: o
						}),
						onMouseDown: u,
						ref: this.menuItems
					}, !h && g && this.getDropdownMenuItems()))
				}
			}
			t.b = m
		}
	}
]);
//# sourceMappingURL=https://www.redditstatic.com/desktop2x/CommunityNotificationSettings.1a19a2ae1c7be2da0f67.js.map