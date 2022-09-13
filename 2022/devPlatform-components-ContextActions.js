// https://www.redditstatic.com/desktop2x/devPlatform-components-ContextActions.f77e91641adf11fbba9d.js
// Retrieved at 9/13/2022, 4:10:04 PM by Reddit Dataminer v1.0.0
(window.__LOADABLE_LOADED_CHUNKS__ = window.__LOADABLE_LOADED_CHUNKS__ || []).push([
	["devPlatform-components-ContextActions"], {
		"./src/devPlatform/components/ContextActions/index.m.less": function(t, e, o) {},
		"./src/devPlatform/components/ContextActions/index.tsx": function(t, e, o) {
			"use strict";
			o.r(e);
			var n = o("./node_modules/react/index.js"),
				s = o.n(n),
				r = o("./node_modules/react-redux/es/index.js"),
				a = o("./node_modules/reselect/es/index.js"),
				i = o("./src/reddit/actions/toaster.ts"),
				d = o("./src/reddit/components/OverflowMenu/index.tsx"),
				c = o("./src/reddit/contexts/PageLayer/index.tsx"),
				l = o("./src/reddit/icons/fonts/index.tsx"),
				u = o("./src/reddit/models/Toast/index.ts"),
				m = o("./src/reddit/selectors/experiments/devPlatform.ts"),
				p = o("./src/devPlatform/components/ContextActions/index.m.less"),
				b = o.n(p),
				h = o("./node_modules/@devvit/protos/index.js"),
				v = o("./src/devPlatform/components/UserInputModal/modals.ts"),
				f = o("./src/devPlatform/singleton/runtime.ts"),
				g = o("./src/higherOrderComponents/makeAsync.tsx"),
				O = o("./src/lib/loadWithRetries/index.ts"),
				w = o("./src/reddit/components/GlobalModalContainer/registry.ts"),
				x = o("./src/reddit/constants/modals.ts");
			const _ = Object(g.a)({
					getComponent: () => Object(O.a)(() => o.e(5).then(o.bind(null, "./src/devPlatform/components/UserInputModal/index.tsx"))).then(t => t.default),
					ErrorComponent: () => null,
					LoadingComponent: () => null
				}),
				A = t => () => {
					t()
				};
			Object(w.b)(x.a.DEV_PLATFORM_USER_INPUT_MODAL, t => s.a.createElement(_, {
				onOverlayClick: A(t),
				withOverlay: !0
			}));
			const I = Object(r.b)(() => Object(a.c)({}), t => ({
					showToast: (e, o) => {
						t(Object(i.f)(Object(i.e)(e, o)))
					},
					onShowUserInput: (e, o) => {
						t(Object(v.b)({
							action: e,
							onAction: o
						}))
					}
				})),
				S = (t, e) => ({
					post: t === h.h.POST ? h.D.fromPartial(e) : void 0,
					comment: t === h.h.COMMENT ? h.c.fromPartial(e) : void 0,
					subreddit: t === h.h.SUBREDDIT ? h.M.fromPartial(e) : void 0
				});
			e.default = I(t => {
				const {
					moderator: e,
					contextType: o,
					contextData: a,
					showToast: i,
					onShowUserInput: p
				} = t, [v, g] = Object(n.useState)([]), O = Object(r.e)(m.a), w = Object(c.eb)(), x = Object(r.e)(t => Object(c.r)(t, {
					pageLayer: w
				}));
				Object(n.useEffect)(() => {
					(async () => {
						if (O && x) {
							await f.a.init();
							const t = await f.a.loadSubreddit(x);
							g(t)
						}
					})()
				});
				const _ = (t, e) => {
						p(t, e)
					},
					A = [];
				return v.forEach(t => {
					var n;
					return null === (n = t.actions) || void 0 === n ? void 0 : n.actions.filter(((t, e) => o => {
						var n, s, r, a, i;
						if (e && !(null === (n = o.users) || void 0 === n ? void 0 : n.moderator) || !e && (null === (s = o.users) || void 0 === s ? void 0 : s.moderator)) return !1;
						switch (t) {
							case h.h.POST:
								return !!(null === (r = o.contexts) || void 0 === r ? void 0 : r.post);
							case h.h.COMMENT:
								return !!(null === (a = o.contexts) || void 0 === a ? void 0 : a.comment);
							case h.h.SUBREDDIT:
								return !!(null === (i = o.contexts) || void 0 === i ? void 0 : i.subreddit);
							default:
								return !1
						}
					})(o, e)).forEach(e => {
						const n = function(t, e, o, n, s, r) {
							return () => {
								const a = r => {
									var a, i;
									return null === (i = null === (a = f.a.getActor(t)) || void 0 === a ? void 0 : a.As(h.f)) || void 0 === i ? void 0 : i.OnAction(h.g.fromPartial({
										actionId: e.actionId,
										contextType: o,
										...S(o, n),
										userInput: r
									})).then(t => {
										const e = t.success ? u.b.SuccessCommunityGreen : u.b.Error;
										s(t.message, e)
									})
								};
								e.userInput ? r(e, a) : a()
							}
						}(t.actorHostname, e, o, a, i, _);
						A.push(s.a.createElement(d.a, {
							displayText: e.name,
							key: e.actionId,
							onClick: n
						}, s.a.createElement(l.a, {
							name: "bot",
							className: b.a.icon
						})))
					})
				}), s.a.createElement(s.a.Fragment, null, A)
			})
		},
		"./src/devPlatform/components/UserInputModal/modals.ts": function(t, e, o) {
			"use strict";
			o.d(e, "b", (function() {
				return l
			})), o.d(e, "a", (function() {
				return u
			}));
			var n = o("./src/lib/initializeClient/installReducer.ts"),
				s = o("./src/lib/makeActionCreator/index.ts"),
				r = o("./src/reddit/actions/modal.ts"),
				a = o("./src/reddit/constants/modals.ts"),
				i = o("./src/reddit/reducers/features/devPlatform/index.ts"),
				d = o("./src/devPlatform/constants.ts");
			Object(n.a)({
				features: {
					devPlatform: i.a
				}
			});
			const c = Object(s.a)(d.e),
				l = t => {
					let {
						action: e,
						onAction: o
					} = t;
					return async t => {
						t(c({
							action: e,
							onAction: o
						})), t(Object(r.h)(a.a.DEV_PLATFORM_USER_INPUT_MODAL))
					}
				},
				u = () => async t => {
					t(Object(r.g)(a.a.DEV_PLATFORM_USER_INPUT_MODAL))
				}
		},
		"./src/devPlatform/singleton/runtime.ts": function(t, e, o) {
			"use strict";
			o("./node_modules/core-js/modules/web.dom.iterable.js");
			var n = o("./src/config.ts"),
				s = o("./node_modules/@devvit/protos/index.js"),
				r = o("./node_modules/@devvit/runtimes/platform/browser/BrowserRuntime.js"),
				a = o("./src/devPlatform/constants.ts"),
				i = o("./node_modules/@devvit/runtimes/worker.bootstrap.cjs"),
				d = o("./node_modules/@devvit/runtimes/worker.echo.cjs"),
				c = o("./node_modules/@devvit/runtimes/worker.redditapi.cjs"),
				l = o("./node_modules/@devvit/runtimes/worker.supervisor.cjs"),
				u = o("./src/lib/localStorageAvailable/index.ts");
			const m = new Map([
				["bootstrap", i.a],
				["supervisor", l.a],
				["redditapi", c.a],
				["echo", d.a]
			]);
			const p = new class {
				constructor() {
					var t;
					if (this.runtime = new r.a(m), this.gatewayUrl = "", this.loadedSubId = "", this.subActors = [], this.mockMetadata = null, this.localStorageAvailable = Object(u.a)(), this.runtimeInitialized = !1, this.debugLogging = !1, this.localStorageAvailable) {
						this.gatewayUrl = null !== (t = localStorage.getItem(a.b)) && void 0 !== t ? t : n.a.devPlatformGatewayUrl;
						const e = localStorage.getItem(a.c);
						e && (this.mockMetadata = JSON.parse(e)), this.debugLogging = "true" === localStorage.getItem(a.d)
					}
				}
				async init() {
					this.runtimeInitialized || (this.runtimeInitialized = !0, await this.runtime.start())
				}
				getGatewayUrl() {
					return this.gatewayUrl
				}
				setGatewayUrl(t) {
					return this.gatewayUrl = t, this.localStorageAvailable && (t === n.a.devPlatformGatewayUrl ? localStorage.removeItem(a.b) : localStorage.setItem(a.b, t)), this.reloadSubreddit(), this.subActors.length
				}
				getDebugLogging() {
					return this.debugLogging
				}
				setDebugLogging(t) {
					this.debugLogging = t, localStorage.setItem(a.d, t ? "true" : "false")
				}
				loadMockData(t) {
					this.mockMetadata = t, this.localStorageAvailable && (t ? localStorage.setItem(a.c, JSON.stringify(t)) : localStorage.removeItem(a.c))
				}
				async loadSubreddit(t) {
					let e = this.mockMetadata;
					return t.devPlatformMetadata && (e = s.j.fromJSON(JSON.parse(atob(t.devPlatformMetadata))), this.debugLog("metadata:", e)), this.debugLog("metadata.contextActions:", null == e ? void 0 : e.contextActions), this.debugLog("metadata.installedRemoteApps:", null == e ? void 0 : e.installedRemoteApps), e ? t.id === this.loadedSubId ? e.contextActions : (this.unloadSubreddit(), this.loadedSubId = t.id, this.subActors = [], e.installedRemoteApps.forEach(t => {
						const e = {
							hostname: t.hostname,
							provides: s.i.fromSerializable(t.provides[0])
						};
						this.loadActor(e), this.subActors.push(e)
					}), e.contextActions) : []
				}
				getActor(t) {
					return this.runtime.getActorRef(t)
				}
				unloadSubreddit() {
					this.subActors.forEach(t => {
						this.runtime.unbind(t.hostname)
					})
				}
				loadActor(t) {
					const e = t.hostname.split("."),
						o = {
							"devvit-installation": s.L.fromPartial({
								values: [e[0]]
							}),
							"devvit-actor": s.L.fromPartial({
								values: [e[2]]
							})
						};
					this.runtime.bindRemoteActor(t.provides, t.hostname, this.gatewayUrl, o)
				}
				reloadSubreddit() {
					this.unloadSubreddit(), this.subActors.forEach(t => this.loadActor(t))
				}
				debugLog() {
					if (this.debugLogging) {
						for (var t = arguments.length, e = new Array(t), o = 0; o < t; o++) e[o] = arguments[o];
						console.debug.apply(null, e)
					}
				}
			};
			e.a = p
		},
		"./src/higherOrderComponents/withAdClickLocation/Locations.ts": function(t, e, o) {
			"use strict";
			var n, s;
			o.d(e, "a", (function() {
					return n
				})), o.d(e, "b", (function() {
					return s
				})),
				function(t) {
					t.UNKNOWN = "unknown", t.TITLE = "title", t.TOP_BAR = "top_bar", t.MEDIA = "media", t.BACKGROUND = "background", t.CTA_URL = "cta_url", t.CTA_BUTTON = "cta_button", t.CTA_WHITESPACE = "cta_whitespace", t.CTA_CAPTION = "cta_caption"
				}(n || (n = {})),
				function(t) {
					t.COMMENTS = "comments", t.FLATLIST_SHARE = "fl_share", t.FLATLIST_AWARD = "fl_award", t.FLATLIST_SAVE = "fl_save", t.FLATLIST_GENERAL = "fl_unknown", t.OVERFLOW_MENU = "overflow_menu", t.UPVOTE = "upvote", t.DOWNVOTE = "downvote"
				}(s || (s = {}))
		},
		"./src/reddit/components/GlobalModalContainer/registry.ts": function(t, e, o) {
			"use strict";
			o.d(e, "b", (function() {
				return r
			})), o.d(e, "a", (function() {
				return a
			}));
			const n = {},
				s = () => null;

			function r(t, e) {
				if (t in n) throw new Error(`Modal with id ${t} already registered!`);
				n[t] = e
			}

			function a(t) {
				return t && t in n ? n[t] : s
			}
		},
		"./src/reddit/components/OverflowMenu/index.m.less": function(t, e, o) {
			t.exports = {
				_Dropdown: "ehsOqYO6dxn_Pf9Dzwu37",
				dropdown: "ehsOqYO6dxn_Pf9Dzwu37",
				MenuButton: "_2pFdCpgBihIaYh9DSMWBIu",
				menuButton: "_2pFdCpgBihIaYh9DSMWBIu",
				mIsEnabled: "uMPgOFYlCc5uvpa2Lbteu",
				MenuIcon: "_38GxRFSqSC-Z2VLi5Xzkjy",
				menuIcon: "_38GxRFSqSC-Z2VLi5Xzkjy",
				DropdownRow: "_2DO72U0b_6CUw3msKGrnnT",
				dropdownRow: "_2DO72U0b_6CUw3msKGrnnT"
			}
		},
		"./src/reddit/components/OverflowMenu/index.tsx": function(t, e, o) {
			"use strict";
			o.d(e, "a", (function() {
				return _
			}));
			var n = o("./node_modules/fbt/lib/FbtPublic.js"),
				s = o("./node_modules/react/index.js"),
				r = o.n(s),
				a = o("./node_modules/react-redux/es/index.js"),
				i = o("./node_modules/reselect/es/index.js"),
				d = o("./src/lib/classNames/index.ts"),
				c = o("./src/lib/lessComponent.tsx"),
				l = o("./src/reddit/actions/tooltip.ts"),
				u = o("./src/reddit/components/OverlayAwareTooltip/index.tsx"),
				m = o("./src/reddit/controls/Dropdown/index.tsx"),
				p = o("./src/reddit/controls/Dropdown/Row.tsx"),
				b = o("./src/reddit/icons/fonts/index.tsx"),
				h = o("./src/reddit/selectors/tooltip.ts"),
				v = o("./src/higherOrderComponents/withAdClickLocation/Locations.ts"),
				f = o("./src/reddit/components/OverflowMenu/index.m.less"),
				g = o.n(f);
			const O = c.a.wrapped(m.a, "_Dropdown", g.a),
				w = Object(u.a)(O),
				x = c.a.button("MenuButton", g.a),
				_ = c.a.wrapped(p.b, "DropdownRow", g.a),
				A = Object(i.c)({
					dropdownIsOpen: (t, e) => {
						let {
							dropdownId: o
						} = e;
						return Object(h.b)(o)(t)
					}
				}),
				I = Object(a.b)(A, (t, e) => {
					let {
						dropdownId: o
					} = e;
					return {
						toggleDropdown: () => t(Object(l.h)({
							tooltipId: o
						}))
					}
				}),
				S = t => e => {
					t.onClick && t.onClick(), t.toggleDropdown(), e.stopPropagation()
				};
			e.b = I(t => r.a.createElement(x, {
				"aria-expanded": t.dropdownIsOpen,
				"aria-haspopup": !0,
				"aria-label": n.fbt._("more options", null, {
					hk: "2EnY1x"
				}),
				className: Object(d.a)(t.className, {
					[g.a.mIsEnabled]: !t.disabled && !t.defaultButtonOutline
				}),
				disabled: t.disabled,
				onClick: S(t),
				onMouseDown: t.handleMouseDown,
				id: t.dropdownId,
				"data-adclicklocation": v.b.OVERFLOW_MENU
			}, t.icon ? t.icon : r.a.createElement(b.a, {
				name: "overflow_horizontal",
				className: g.a.MenuIcon
			}), r.a.createElement(w, {
				className: t.dropdownClassName,
				isOpen: t.dropdownIsOpen,
				tooltipId: t.dropdownId,
				isFixed: t.isFixed,
				targetPosition: t.targetPosition,
				tooltipPosition: t.tooltipPosition,
				style: t.style
			}, t.children)))
		},
		"./src/reddit/components/OverlayAwareTooltip/index.tsx": function(t, e, o) {
			"use strict";
			o.d(e, "a", (function() {
				return c
			}));
			var n = o("./node_modules/react/index.js"),
				s = o.n(n),
				r = o("./src/higherOrderComponents/asTooltip.tsx"),
				a = o("./src/reddit/constants/elementIds.ts"),
				i = o("./src/reddit/contexts/InsideOverlay.tsx");

			function d() {
				return (d = Object.assign || function(t) {
					for (var e = 1; e < arguments.length; e++) {
						var o = arguments[e];
						for (var n in o) Object.prototype.hasOwnProperty.call(o, n) && (t[n] = o[n])
					}
					return t
				}).apply(this, arguments)
			}

			function c(t, e) {
				const o = Object(r.a)(t, e);
				class n extends s.a.PureComponent {
					constructor() {
						super(...arguments), this.state = {
							container: null
						}
					}
					componentDidMount() {
						if (this.props.isOverlay) {
							const t = document.getElementById(a.e);
							this.setState({
								container: t
							})
						}
					}
					render() {
						return s.a.createElement(o, d({}, this.props, {
							container: this.state.container || this.props.container,
							excludeContainerPosition: this.props.isOverlay
						}))
					}
				}
				return Object(i.b)(n)
			}
		},
		"./src/reddit/reducers/features/devPlatform/index.ts": function(t, e, o) {
			"use strict";
			var n = o("./node_modules/redux/es/redux.js"),
				s = o("./src/lib/initializeClient/installReducer.ts"),
				r = o("./src/devPlatform/constants.ts");
			Object(s.a)({
				features: {
					devPlatform: c
				}
			});
			var a = function() {
				let t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
					e = arguments.length > 1 ? arguments[1] : void 0;
				const o = e.payload;
				switch (e.type) {
					case r.e:
						return o.action;
					default:
						return t
				}
			};
			var i = function() {
					let t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
						e = arguments.length > 1 ? arguments[1] : void 0;
					const o = e.payload;
					switch (e.type) {
						case r.e:
							return o.onAction;
						default:
							return t
					}
				},
				d = Object(n.c)({
					action: a,
					onAction: i
				}),
				c = e.a = Object(n.c)({
					userInputModal: d
				})
		},
		"ignored /drone/src/node_modules/cron-parser/lib fs": function(t, e) {}
	}
]);
//# sourceMappingURL=https://www.redditstatic.com/desktop2x/devPlatform-components-ContextActions.f77e91641adf11fbba9d.js.map