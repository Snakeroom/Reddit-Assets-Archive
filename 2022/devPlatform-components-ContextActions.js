// https://www.redditstatic.com/desktop2x/devPlatform-components-ContextActions.bb8def441505033038f7.js
// Retrieved at 9/12/2022, 2:10:03 PM by Reddit Dataminer v1.0.0
(window.__LOADABLE_LOADED_CHUNKS__ = window.__LOADABLE_LOADED_CHUNKS__ || []).push([
	["devPlatform-components-ContextActions"], {
		"./src/devPlatform/components/ContextActions/index.m.less": function(t, e, o) {},
		"./src/devPlatform/components/ContextActions/index.tsx": function(t, e, o) {
			"use strict";
			o.r(e);
			var n = o("./node_modules/react/index.js"),
				s = o.n(n),
				r = o("./node_modules/react-redux/es/index.js"),
				a = o("./src/reddit/actions/toaster.ts"),
				i = o("./src/reddit/components/OverflowMenu/index.tsx"),
				d = o("./src/reddit/icons/fonts/index.tsx"),
				c = o("./src/reddit/models/Toast/index.ts"),
				l = o("./src/reddit/selectors/experiments/devPlatform.ts"),
				u = o("./src/devPlatform/components/ContextActions/index.m.less"),
				m = o.n(u),
				p = o("./node_modules/@devvit/protos/index.js"),
				b = o("./src/devPlatform/singleton/runtime.ts"),
				h = o("./src/reddit/contexts/PageLayer/index.tsx"),
				g = o("./node_modules/reselect/es/index.js");
			const v = Object(r.b)(() => Object(g.c)({}), t => ({
					showToast: (e, o) => {
						t(Object(a.f)(Object(a.e)(e, o)))
					}
				})),
				f = (t, e) => ({
					post: t === p.f.POST ? p.B.fromPartial(e) : void 0,
					comment: t === p.f.COMMENT ? p.c.fromPartial(e) : void 0,
					subreddit: t === p.f.SUBREDDIT ? p.K.fromPartial(e) : void 0
				});
			e.default = v(t => {
				const {
					moderator: e,
					contextType: o,
					contextData: a,
					showToast: u
				} = t, [g, v] = Object(n.useState)([]), w = Object(r.e)(l.a), O = Object(h.eb)(), x = Object(r.e)(t => Object(h.r)(t, {
					pageLayer: O
				}));
				Object(n.useEffect)(() => {
					(async () => {
						if (w && x) {
							await b.a.init();
							const t = await b.a.loadSubreddit(x);
							v(t)
						}
					})()
				});
				const _ = [];
				return g.forEach(t => {
					var n;
					return null === (n = t.actions) || void 0 === n ? void 0 : n.actions.filter(((t, e) => o => {
						var n, s, r, a, i;
						if (e && !(null === (n = o.users) || void 0 === n ? void 0 : n.moderator) || !e && (null === (s = o.users) || void 0 === s ? void 0 : s.moderator)) return !1;
						switch (t) {
							case p.f.POST:
								return !!(null === (r = o.contexts) || void 0 === r ? void 0 : r.post);
							case p.f.COMMENT:
								return !!(null === (a = o.contexts) || void 0 === a ? void 0 : a.comment);
							case p.f.SUBREDDIT:
								return !!(null === (i = o.contexts) || void 0 === i ? void 0 : i.subreddit);
							default:
								return !1
						}
					})(o, e)).forEach(e => {
						const n = function(t, e, o, n, s) {
							return () => {
								var r, a;
								null === (a = null === (r = b.a.getActor(t)) || void 0 === r ? void 0 : r.As(p.d)) || void 0 === a || a.OnAction(p.e.fromPartial({
									actionId: e.actionId,
									contextType: o,
									...f(o, n)
								})).then(t => {
									const e = t.success ? c.b.SuccessCommunityGreen : c.b.Error;
									s(t.message, e)
								})
							}
						}(t.actorHostname, e, o, a, u);
						_.push(s.a.createElement(i.a, {
							displayText: e.name,
							key: e.actionId,
							onClick: n
						}, s.a.createElement(d.a, {
							name: "bot",
							className: m.a.icon
						})))
					})
				}), s.a.createElement(s.a.Fragment, null, _)
			})
		},
		"./src/devPlatform/singleton/runtime.ts": function(t, e, o) {
			"use strict";
			o("./node_modules/core-js/modules/web.dom.iterable.js");
			var n = o("./src/config.ts"),
				s = o("./node_modules/@devvit/protos/index.js"),
				r = o("./node_modules/@devvit/runtimes/platform/browser/BrowserRuntime.js"),
				a = o("./src/devPlatform/singleton/constants.ts"),
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
					return t.devPlatformMetadata && (e = s.h.fromJSON(JSON.parse(atob(t.devPlatformMetadata))), this.debugLog("metadata:", e)), this.debugLog("metadata.contextActions:", null == e ? void 0 : e.contextActions), this.debugLog("metadata.installedRemoteApps:", null == e ? void 0 : e.installedRemoteApps), e ? t.id === this.loadedSubId ? e.contextActions : (this.unloadSubreddit(), this.loadedSubId = t.id, this.subActors = [], e.installedRemoteApps.forEach(t => {
						const e = {
							hostname: t.hostname,
							provides: s.g.fromSerializable(t.provides[0])
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
							"devvit-installation": s.J.fromPartial({
								values: [e[0]]
							}),
							"devvit-actor": s.J.fromPartial({
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
				g = o("./src/higherOrderComponents/withAdClickLocation/Locations.ts"),
				v = o("./src/reddit/components/OverflowMenu/index.m.less"),
				f = o.n(v);
			const w = c.a.wrapped(m.a, "_Dropdown", f.a),
				O = Object(u.a)(w),
				x = c.a.button("MenuButton", f.a),
				_ = c.a.wrapped(p.b, "DropdownRow", f.a),
				A = Object(i.c)({
					dropdownIsOpen: (t, e) => {
						let {
							dropdownId: o
						} = e;
						return Object(h.b)(o)(t)
					}
				}),
				S = Object(a.b)(A, (t, e) => {
					let {
						dropdownId: o
					} = e;
					return {
						toggleDropdown: () => t(Object(l.h)({
							tooltipId: o
						}))
					}
				}),
				I = t => e => {
					t.onClick && t.onClick(), t.toggleDropdown(), e.stopPropagation()
				};
			e.b = S(t => r.a.createElement(x, {
				"aria-expanded": t.dropdownIsOpen,
				"aria-haspopup": !0,
				"aria-label": n.fbt._("more options", null, {
					hk: "2EnY1x"
				}),
				className: Object(d.a)(t.className, {
					[f.a.mIsEnabled]: !t.disabled && !t.defaultButtonOutline
				}),
				disabled: t.disabled,
				onClick: I(t),
				onMouseDown: t.handleMouseDown,
				id: t.dropdownId,
				"data-adclicklocation": g.b.OVERFLOW_MENU
			}, t.icon ? t.icon : r.a.createElement(b.a, {
				name: "overflow_horizontal",
				className: f.a.MenuIcon
			}), r.a.createElement(O, {
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
		"ignored /drone/src/node_modules/cron-parser/lib fs": function(t, e) {}
	}
]);
//# sourceMappingURL=https://www.redditstatic.com/desktop2x/devPlatform-components-ContextActions.bb8def441505033038f7.js.map