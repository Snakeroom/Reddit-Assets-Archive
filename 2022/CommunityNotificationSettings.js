// https://www.redditstatic.com/desktop2x/CommunityNotificationSettings.72708970e4c60ea517af.js
// Retrieved at 6/1/2022, 6:10:04 PM by Reddit Dataminer v1.0.0
(window.__LOADABLE_LOADED_CHUNKS__ = window.__LOADABLE_LOADED_CHUNKS__ || []).push([
	["CommunityNotificationSettings"], {
		"./node_modules/lodash/times.js": function(e, t, n) {
			var s = n("./node_modules/lodash/_baseTimes.js"),
				i = n("./node_modules/lodash/_castFunction.js"),
				o = n("./node_modules/lodash/toInteger.js"),
				a = 9007199254740991,
				r = 4294967295,
				c = Math.min;
			e.exports = function(e, t) {
				if ((e = o(e)) < 1 || e > a) return [];
				var n = r,
					d = c(e, r);
				t = i(t), e -= r;
				for (var l = s(d, t); ++n < e;) t(n);
				return l
			}
		},
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
				c = n("./src/reddit/actions/toaster.ts"),
				d = n("./src/reddit/endpoints/subreddit/notificationSettings.ts"),
				l = n("./src/reddit/models/Subreddit/index.ts"),
				u = n("./src/reddit/models/Toast/index.ts");
			const m = Object(i.a)(r.u),
				p = Object(i.a)(r.t),
				f = Object(i.a)(r.s),
				b = e => {
					switch (e) {
						case l.c.OFF:
							return s.fbt._("Unfollowed. You won’t get updates on new activity anymore.", null, {
								hk: "3e1CJR"
							});
						case l.c.FREQUENT:
							return s.fbt._("Followed! Now you’ll get updates on new activity.", null, {
								hk: "3JzOOa"
							});
						case l.c.LOW:
							return s.fbt._("Success! You will see fewer notifications from this community in the future.", null, {
								hk: "4x3TS8"
							});
						default:
							return null
					}
				};
			const h = e => {
				let {
					subredditId: t,
					notificationLevel: n,
					successCallback: i,
					undoCallback: r
				} = e;
				return async (e, h, g) => {
					let {
						gqlContext: O
					} = g;
					var S, v, _;
					e(p());
					const w = (e => {
							switch (e) {
								case l.c.FREQUENT:
									return {
										isSubredditUpdatesInterestingPostEnabled: !0, isUpdateFromSubredditEnabled: !0
									};
								case l.c.LOW:
									return {
										isSubredditUpdatesInterestingPostEnabled: !1, isUpdateFromSubredditEnabled: !0
									};
								case l.c.OFF:
								default:
									return {
										isSubredditUpdatesInterestingPostEnabled: !1, isUpdateFromSubredditEnabled: !1
									}
							}
						})(n),
						N = await Object(d.b)(O(), t, w);
					if ((null === (v = null === (S = N.error) || void 0 === S ? void 0 : S.fields) || void 0 === v ? void 0 : v.length) || function(e) {
							return Boolean(e && e.data && e.data.updateSubredditNotificationSettings)
						}(N.body) && (null === (_ = N.body.data.updateSubredditNotificationSettings.errors) || void 0 === _ ? void 0 : _.length)) return e(f()), e(Object(c.f)({
						kind: u.b.Error,
						text: s.fbt._("Failed to change the frequency of notifications from this community, please try again.", null, {
							hk: "4avFFV"
						})
					}));
					N.ok && (e(Object(o.c)({
						subredditId: t,
						notificationLevel: n
					})), e(m({
						subredditAboutInfo: {
							[t]: {
								notificationLevel: n
							}
						}
					})), i && i(), e(r ? Object(c.f)(Object(c.e)(b(n), u.b.Undo, s.fbt._("Undo", null, {
						hk: "46OwLP"
					}), Object(a.i)(t, r))) : Object(c.f)(Object(c.e)(b(n), u.b.SuccessCommunityGreen))))
				}
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
				c = n("./node_modules/react-redux/es/index.js"),
				d = n("./src/reddit/actions/notificationSettingsLayout/index.ts"),
				l = n("./src/reddit/actions/subreddit/notifications.ts"),
				u = n("./src/reddit/icons/fonts/index.tsx"),
				m = n("./src/reddit/models/Subreddit/index.ts");
			var p = n("./src/reddit/components/SubredditIcon/index.tsx"),
				f = n("./src/reddit/controls/DropdownSelector/index.tsx"),
				b = n("./src/reddit/helpers/trackers/notifications.ts"),
				h = n("./src/reddit/hooks/useTracking.ts"),
				g = n("./src/reddit/components/Settings/Notifications/CommunityNotificationSettings/index.m.less"),
				O = n.n(g);
			const S = e => {
				let {
					subreddit: t,
					onSelect: n
				} = e;
				var s, o;
				const a = Object(h.a)(),
					{
						id: c,
						notificationLevel: d,
						name: l,
						isNsfw: g
					} = t,
					S = t.styles.icon || (null === (s = t.styles.legacyIcon) || void 0 === s ? void 0 : s.url),
					v = null !== (o = t.styles.primaryColor) && void 0 !== o ? o : void 0,
					_ = (e => {
						switch (e) {
							case m.c.OFF:
								return "Off";
							case m.c.FREQUENT:
								return "High Frequency";
							case m.c.LOW:
							default:
								return "Low"
						}
					})(d),
					w = (e => {
						switch (e) {
							case m.c.OFF:
								return r.a.createElement(u.a, {
									name: "notification_off"
								});
							case m.c.FREQUENT:
								return r.a.createElement(u.a, {
									name: "notification_frequent"
								});
							case m.c.LOW:
							default:
								return r.a.createElement(u.a, {
									name: "notification"
								})
						}
					})(d),
					N = [{
						displayText: i.fbt._("Frequent", null, {
							hk: "21spt7"
						}),
						isSelected: d === m.c.FREQUENT,
						value: m.c.FREQUENT,
						icon: r.a.createElement(u.a, {
							name: "notification_frequent",
							className: O.a.dropdownItemIcon
						})
					}, {
						displayText: i.fbt._("Low", null, {
							hk: "2uGDVq"
						}),
						isSelected: d === m.c.LOW,
						value: m.c.LOW,
						icon: r.a.createElement(u.a, {
							name: "notification",
							className: O.a.dropdownItemIcon
						})
					}, {
						displayText: i.fbt._("Off", null, {
							hk: "4GiFvg"
						}),
						isSelected: d === m.c.OFF,
						value: m.c.OFF,
						icon: r.a.createElement(u.a, {
							name: "notification_off",
							className: O.a.dropdownItemIcon
						})
					}];
				return r.a.createElement("div", {
					className: O.a.container,
					key: c
				}, r.a.createElement("div", {
					className: O.a.subreddit
				}, r.a.createElement(p.b, {
					iconUrl: S,
					altText: i.fbt._("Subreddit icon", null, {
						hk: "gEWhf"
					}),
					shouldHideNsfwIcon: g,
					primaryColor: v,
					className: O.a.subredditIcon
				}), r.a.createElement("div", {
					className: O.a.subredditInfo
				}, r.a.createElement("h4", {
					className: O.a.subredditInfoName
				}, "r/", l), r.a.createElement("span", {
					className: O.a.subredditInfoNotification
				}, i.fbt._("Notifications: {notification level}", [i.fbt._param("notification level", _)], {
					hk: "2YgR3R"
				})))), r.a.createElement(f.b, {
					isCompactStyle: !0,
					displayText: t.notificationLevel,
					options: N,
					onSelect: e => {
						var t;
						a(Object(b.n)(c, l, null === (t = e.value) || void 0 === t ? void 0 : t.toLowerCase())), n(c, e.value)
					},
					buttonClassName: O.a.dropdown,
					buttonIcon: w
				}))
			};
			var v = n("./src/reddit/components/Settings/Notifications/LoadingSection.tsx"),
				_ = n("./src/reddit/selectors/user.ts");
			const w = Object(o.c)({
					cursor: _.sb,
					hasError: _.tb,
					hasNextPage: _.ub,
					isPending: _.vb,
					subreddits: _.wb
				}),
				N = Object(c.b)(w, e => ({
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
			t.default = N(e => {
				let {
					fetchSubscribesSubreddits: t,
					subreddits: n,
					cursor: o,
					hasNextPage: c,
					hasError: d,
					isPending: l,
					updateSubredditNotificationLevel: u,
					clearSubscribedSubredditsList: m
				} = e;
				const p = Object(h.a)();
				Object(a.useEffect)(() => (p(Object(b.o)()), t({
					first: 20
				}), () => {
					m()
				}), []);
				const f = n && n.length > 0;
				return d ? r.a.createElement("span", {
					className: O.a.errorMessage,
					"data-testid": "error-message"
				}, i.fbt._("There was an issue fetching your subreddits notifications settings. Please try again later.", null, {
					hk: "1Wt132"
				})) : l && !f ? r.a.createElement(v.a, {
					rowsCount: 5
				}) : f ? r.a.createElement(r.a.Fragment, null, n.map(e => r.a.createElement(S, {
					subreddit: e,
					onSelect: u,
					key: e.id
				})), c && r.a.createElement(s.a, {
					onChange: e => {
						e.isIntersecting && o && t({
							after: o,
							first: 20
						})
					},
					rootMargin: "0px 0px 0px 0px",
					threshold: .5
				}, r.a.createElement("div", null)), l && r.a.createElement(v.a, {
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
				return d
			}));
			var s = n("./node_modules/lodash/times.js"),
				i = n.n(s),
				o = n("./node_modules/react/index.js"),
				a = n.n(o),
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
				}), i()(t, e => a.a.createElement("div", {
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
				i = n.n(s),
				o = n("./src/reddit/controls/DropdownSelector/index.m.less"),
				a = n.n(o),
				r = n("./src/lib/classNames/index.ts"),
				c = n("./src/reddit/controls/Dropdown/Row.tsx"),
				d = n("./src/reddit/controls/LoadingIcon/index.tsx"),
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
						menuOptionClassName: s
					} = this.props;
					return e.map((e, o) => i.a.createElement(c.b, {
						key: o + e.displayText,
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
						isTopicsStyle: o,
						menuItemsClassName: c,
						name: m,
						isSaving: p,
						buttonIcon: f,
						disabled: b
					} = this.props, {
						isOpen: h
					} = this.state;
					return i.a.createElement("div", {
						ref: this.containerRef,
						id: this.props.id,
						className: Object(r.a)(a.a.dropdownMenu, t, {
							[a.a.topics]: o
						})
					}, i.a.createElement("button", {
						onClick: b ? void 0 : this.handleDropdownClick,
						className: Object(r.a)(e, a.a.selector, {
							[a.a.compact]: s
						}, {
							[a.a.topics]: o
						}, {
							[a.a.disabled]: b
						}),
						name: m,
						role: "menu",
						ref: this.dropdownButton,
						onBlur: b ? void 0 : this.handleDropdownBlur,
						onKeyDown: b ? void 0 : this.handleDropdownKeyDown
					}, i.a.createElement("span", {
						className: a.a.selectorContent,
						tabIndex: -1
					}, f && i.a.createElement("span", {
						className: a.a.buttonIcon
					}, f), n), b ? null : p ? i.a.createElement(d.a, {
						sizePx: 8,
						className: a.a.loadingIcon
					}) : i.a.createElement(l.a, {
						name: "caret_down"
					})), i.a.createElement("div", {
						className: Object(r.a)(a.a.menuItems, c, {
							[a.a.topics]: o,
							[a.a.isClosed]: !h
						}),
						onMouseDown: u,
						ref: this.menuItems
					}, !b && h && this.getDropdownMenuItems()))
				}
			}
			t.b = m
		}
	}
]);
//# sourceMappingURL=https://www.redditstatic.com/desktop2x/CommunityNotificationSettings.72708970e4c60ea517af.js.map