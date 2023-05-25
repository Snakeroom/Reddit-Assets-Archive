// https://www.redditstatic.com/desktop2x/devPlatform-components-AdminPanel-Utilities-DevPlatformConfig.d683077eacb7fa25e444.js
// Retrieved at 5/25/2023, 11:10:03 AM by Reddit Dataminer v1.0.0
(window.__LOADABLE_LOADED_CHUNKS__ = window.__LOADABLE_LOADED_CHUNKS__ || []).push([
	["devPlatform-components-AdminPanel-Utilities-DevPlatformConfig"], {
		"./src/devPlatform/components/AdminPanel/Utilities/DevPlatformConfig/index.tsx": function(t, e, a) {
			"use strict";
			a.r(e);
			var o = a("./node_modules/react/index.js"),
				s = a.n(o),
				i = a("./node_modules/react-redux/es/index.js"),
				n = a("./node_modules/reselect/es/index.js"),
				r = a("./src/config.ts"),
				l = a("./src/reddit/actions/toaster.ts"),
				d = a("./src/reddit/components/AdminPanel/Utilities/Section.tsx"),
				c = a("./src/reddit/controls/Button/index.tsx"),
				u = a("./src/reddit/models/Toast/index.ts"),
				g = a("./src/devPlatform/singleton/runtime.ts");
			const h = Object(i.b)(() => Object(n.c)({}), t => ({
				showToast: (e, a) => {
					t(Object(l.f)(Object(l.e)(e, a)))
				}
			}));
			class m extends s.a.Component {
				constructor(t) {
					super(t), this.gatewayUrlChanged = t => {
						this.setState({
							gatewayUrl: t.target.value
						})
					}, this.saveGatewayUrl = () => {
						const t = g.a.setGatewayUrl(this.state.gatewayUrl);
						this.props.showToast(`URL updated: ${this.state.gatewayUrl}. ${t} apps reloaded.`, u.b.SuccessCommunityGreen)
					}, this.resetGatewayUrl = () => {
						this.setState({
							gatewayUrl: r.a.devPlatformGatewayUrl
						}), this.saveGatewayUrl()
					}, this.debugLoggingChanged = t => {
						const e = t.target.checked;
						this.setState({
							debugLogging: e
						}), g.a.setDebugLogging(e)
					}, this.mockDataSelected = t => {
						var e, a, o;
						null === (o = null === (a = null === (e = t.target.files) || void 0 === e ? void 0 : e[0]) || void 0 === a ? void 0 : a.text()) || void 0 === o || o.then(t => this.setState({
							mockData: JSON.parse(t)
						}))
					}, this.loadMockData = () => {
						this.state.mockData && (g.a.loadMockData(this.state.mockData), this.props.showToast("Developer platform mock data loaded. Reload to see changes.", u.b.SuccessCommunityGreen))
					}, this.clearMockData = () => {
						g.a.loadMockData(), this.props.showToast("Developer platform mock data cleared. Reload to see changes.", u.b.SuccessCommunityGreen)
					}, this.state = {
						gatewayUrl: g.a.getGatewayUrl(),
						mockData: null,
						debugLogging: g.a.getDebugLogging()
					}
				}
				render() {
					return s.a.createElement(d.a, {
						title: "Developer Platform"
					}, s.a.createElement(s.a.Fragment, null, s.a.createElement("label", null, s.a.createElement("input", {
						type: "checkbox",
						onChange: this.debugLoggingChanged,
						checked: this.state.debugLogging,
						role: "checkbox"
					}), "Debug Logging"), s.a.createElement("br", null), s.a.createElement("label", null, "Gateway URL:", s.a.createElement("input", {
						value: this.state.gatewayUrl,
						onChange: this.gatewayUrlChanged,
						placeholder: "Gateway URL"
					})), s.a.createElement(c.o, {
						onClick: this.saveGatewayUrl,
						role: "button"
					}, "Save URL"), s.a.createElement(c.o, {
						onClick: this.resetGatewayUrl,
						role: "button"
					}, "Reset URL"), s.a.createElement("label", null, "Mock Data:", s.a.createElement("input", {
						type: "file",
						onChange: this.mockDataSelected,
						accept: ".json,application/json"
					})), s.a.createElement(c.o, {
						onClick: this.loadMockData,
						role: "button"
					}, "Load"), s.a.createElement(c.o, {
						onClick: this.clearMockData,
						role: "button"
					}, "Clear")))
				}
			}
			e.default = h(m)
		},
		"./src/devPlatform/constants.ts": function(t, e, a) {
			"use strict";
			a.d(e, "b", (function() {
				return o
			})), a.d(e, "c", (function() {
				return s
			})), a.d(e, "d", (function() {
				return i
			})), a.d(e, "e", (function() {
				return n
			})), a.d(e, "f", (function() {
				return r
			})), a.d(e, "a", (function() {
				return l
			}));
			const o = "devvit-gateway-url",
				s = "devvit-mock-metadata",
				i = "devvit-debug-logging",
				n = "DEV_PLAT__OPEN_FORM_MODAL",
				r = "DEV_PLAT__OPEN_USER_INPUT_MODAL";
			var l;
			! function(t) {
				t[t.POST = 0] = "POST", t[t.COMMENT = 1] = "COMMENT", t[t.SUBREDDIT = 2] = "SUBREDDIT", t[t.UNRECOGNIZED = -1] = "UNRECOGNIZED"
			}(l || (l = {}))
		},
		"./src/devPlatform/singleton/runtime.ts": function(t, e, a) {
			"use strict";
			a("./node_modules/core-js/modules/web.dom.iterable.js");
			var o = a("./src/config.ts"),
				s = a("./node_modules/@devvit/protos/index.js"),
				i = a("./node_modules/@devvit/runtimes/platform/browser/BrowserRuntime.js"),
				n = a("./src/devPlatform/constants.ts"),
				r = a("./node_modules/@devvit/runtimes/worker.bootstrap.cjs"),
				l = a("./node_modules/@devvit/runtimes/worker.echo.cjs"),
				d = a("./node_modules/@devvit/runtimes/worker.redditapi.cjs"),
				c = a("./node_modules/@devvit/runtimes/worker.supervisor.cjs"),
				u = a("./src/lib/localStorageAvailable/index.ts");
			const g = new Map([
				["bootstrap", r.a],
				["supervisor", c.a],
				["redditapi", d.a],
				["echo", l.a]
			]);
			class h {
				constructor(t) {
					this.hostname = t
				}
				async dispose() {}
				onBind() {}
				onUnbind() {}
				post() {}
			}
			const m = new class {
				constructor() {
					var t;
					if (this.gatewayUrl = "", this.loadedSubId = "", this.subActors = [], this.loadedMetadata = null, this.mockMetadata = null, this.sortedContextActions = [], this.localStorageAvailable = Object(u.a)(), this.runtimeInitialized = !1, this.debugLogging = !1, this.localStorageAvailable) {
						this.gatewayUrl = null !== (t = localStorage.getItem(n.b)) && void 0 !== t ? t : o.a.devPlatformGatewayUrl;
						const e = localStorage.getItem(n.c);
						e && (this.mockMetadata = JSON.parse(e)), this.debugLogging = "true" === localStorage.getItem(n.d)
					}
					this.runtime = new i.a(g, {
						logLevel: this.debugLogging ? void 0 : "off"
					})
				}
				init() {
					this.runtimeInitialized || (this.runtimeInitialized = !0, this.runtime.start())
				}
				getGatewayUrl() {
					return this.gatewayUrl
				}
				setGatewayUrl(t) {
					return this.gatewayUrl = t, this.localStorageAvailable && (t === o.a.devPlatformGatewayUrl ? localStorage.removeItem(n.b) : localStorage.setItem(n.b, t)), this.reloadSubreddit(), this.subActors.length
				}
				getDebugLogging() {
					return this.debugLogging
				}
				setDebugLogging(t) {
					this.debugLogging = t, localStorage.setItem(n.d, t ? "true" : "false")
				}
				loadMockData(t) {
					this.mockMetadata = t, this.localStorageAvailable && (t ? localStorage.setItem(n.c, JSON.stringify(t)) : localStorage.removeItem(n.c))
				}
				loadSubreddit(t) {
					if (t.id === this.loadedSubId) return this.sortedContextActions;
					if (this.loadedMetadata = null, this.debugLog(() => "Metadata not yet loaded"), void 0 !== t.devPlatformMetadata ? (this.debugLog(() => {
							var e;
							return `Loading metadata from Subreddit (${null===(e=t.devPlatformMetadata)||void 0===e?void 0:e.length} bytes)`
						}), this.loadedMetadata = s.j.fromJSON(JSON.parse(atob(t.devPlatformMetadata))), this.debugLog(() => {
							var t;
							return ["metadata.installedRemoteApps:", null === (t = this.loadedMetadata) || void 0 === t ? void 0 : t.installedRemoteApps]
						}), this.debugLog(() => {
							var t;
							return ["metadata.contextActions:", null === (t = this.loadedMetadata) || void 0 === t ? void 0 : t.contextActions]
						})) : null !== this.mockMetadata && (this.debugLog(() => "Using mock metadata"), this.loadedMetadata = this.mockMetadata), !this.loadedMetadata) return this.debugLog(() => "No metadata found"), [];
					this.unloadSubreddit(), this.loadedSubId = t.id, this.subActors = [];
					const e = this.loadedMetadata.installedRemoteApps.reduce((t, e) => (t.add(e.hostname.split(".")[0]), t), new Set);
					return this.debugLog(() => `Connecting to ${this.loadedMetadata.installedRemoteApps.length} remote actors from ${e.size} apps`), this.loadedMetadata.installedRemoteApps.forEach(t => {
						const e = t.provides.flatMap(t => {
								try {
									return [s.i.fromSerializable(t)]
								} catch {
									this.debugLog(() => `Unknown app type, skipping: ${t.fullName}`)
								}
								return []
							}),
							a = {
								hostname: t.hostname,
								provides: e
							};
						this.loadActor(a), this.subActors.push(a)
					}), this.debugLog(() => `Found ${this.loadedMetadata.contextActions.reduce((t,e)=>{var a,o;return t+(null!==(o=null===(a=e.actions)||void 0===a?void 0:a.actions.length)&&void 0!==o?o:0)},0)} actions across ${this.loadedMetadata.contextActions.length} actors`), this.sortedContextActions = this.loadedMetadata.contextActions.sort((t, e) => t.actorHostname.localeCompare(e.actorHostname)).map(t => {
						var e, a, o;
						return {
							actorHostname: t.actorHostname,
							actions: {
								actions: null !== (o = null === (a = null === (e = t.actions) || void 0 === e ? void 0 : e.actions) || void 0 === a ? void 0 : a.sort((t, e) => t.name.localeCompare(e.name))) && void 0 !== o ? o : []
							}
						}
					}), this.sortedContextActions
				}
				getActor(t) {
					return this.runtime.getActorRef(t)
				}
				unloadSubreddit() {
					this.subActors.forEach(t => {
						this.runtime.unbind(new h(t.hostname))
					})
				}
				loadActor(t) {
					const e = t.hostname.split("."),
						a = {
							"devvit-installation": s.T.fromPartial({
								values: [e[0]]
							}),
							"devvit-actor": s.T.fromPartial({
								values: [e[2]]
							})
						};
					this.runtime.bindRemoteActor(t.provides, t.hostname, this.gatewayUrl, a)
				}
				reloadSubreddit() {
					this.unloadSubreddit(), this.subActors.forEach(t => this.loadActor(t))
				}
				debugLog(t) {
					if (this.debugLogging) {
						const e = t();
						"string" == typeof e ? console.log(e) : console.log.apply(null, e)
					}
				}
			};
			e.a = m
		},
		"ignored /drone/src/node_modules/cron-parser/lib fs": function(t, e) {}
	}
]);
//# sourceMappingURL=https://www.redditstatic.com/desktop2x/devPlatform-components-AdminPanel-Utilities-DevPlatformConfig.d683077eacb7fa25e444.js.map