// https://www.redditstatic.com/desktop2x/devPlatform-components-AdminPanel-Utilities-DevPlatformConfig.a0b6e3c15cd6e871aaa6.js
// Retrieved at 10/31/2022, 5:50:05 PM by Reddit Dataminer v1.0.0
(window.__LOADABLE_LOADED_CHUNKS__ = window.__LOADABLE_LOADED_CHUNKS__ || []).push([
	["devPlatform-components-AdminPanel-Utilities-DevPlatformConfig"], {
		"./src/devPlatform/components/AdminPanel/Utilities/DevPlatformConfig/index.tsx": function(t, e, a) {
			"use strict";
			a.r(e);
			var o = a("./node_modules/react/index.js"),
				s = a.n(o),
				i = a("./node_modules/react-redux/es/index.js"),
				r = a("./node_modules/reselect/es/index.js"),
				n = a("./src/config.ts"),
				d = a("./src/reddit/actions/toaster.ts"),
				l = a("./src/reddit/components/AdminPanel/Utilities/Section.tsx"),
				c = a("./src/reddit/controls/Button/index.tsx"),
				u = a("./src/reddit/models/Toast/index.ts"),
				g = a("./src/devPlatform/singleton/runtime.ts");
			const h = Object(i.b)(() => Object(r.c)({}), t => ({
				showToast: (e, a) => {
					t(Object(d.f)(Object(d.e)(e, a)))
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
							gatewayUrl: n.a.devPlatformGatewayUrl
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
					return s.a.createElement(l.a, {
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
				return r
			})), a.d(e, "a", (function() {
				return n
			}));
			const o = "devvit-gateway-url",
				s = "devvit-mock-metadata",
				i = "devvit-debug-logging",
				r = "DEV_PLAT__OPEN_USER_INPUT_MODAL";
			var n;
			! function(t) {
				t[t.POST = 0] = "POST", t[t.COMMENT = 1] = "COMMENT", t[t.SUBREDDIT = 2] = "SUBREDDIT", t[t.UNRECOGNIZED = -1] = "UNRECOGNIZED"
			}(n || (n = {}))
		},
		"./src/devPlatform/singleton/runtime.ts": function(t, e, a) {
			"use strict";
			a("./node_modules/core-js/modules/web.dom.iterable.js");
			var o = a("./src/config.ts"),
				s = a("./node_modules/@devvit/protos/index.js"),
				i = a("./node_modules/@devvit/runtimes/platform/browser/BrowserRuntime.js"),
				r = a("./src/devPlatform/constants.ts"),
				n = a("./node_modules/@devvit/runtimes/worker.bootstrap.cjs"),
				d = a("./node_modules/@devvit/runtimes/worker.echo.cjs"),
				l = a("./node_modules/@devvit/runtimes/worker.redditapi.cjs"),
				c = a("./node_modules/@devvit/runtimes/worker.supervisor.cjs"),
				u = a("./src/lib/localStorageAvailable/index.ts");
			const g = new Map([
				["bootstrap", n.a],
				["supervisor", c.a],
				["redditapi", l.a],
				["echo", d.a]
			]);
			const h = new class {
				constructor() {
					var t;
					if (this.runtime = new i.a(g), this.gatewayUrl = "", this.loadedSubId = "", this.subActors = [], this.loadedMetadata = null, this.mockMetadata = null, this.localStorageAvailable = Object(u.a)(), this.runtimeInitialized = !1, this.debugLogging = !1, this.localStorageAvailable) {
						this.gatewayUrl = null !== (t = localStorage.getItem(r.b)) && void 0 !== t ? t : o.a.devPlatformGatewayUrl;
						const e = localStorage.getItem(r.c);
						e && (this.mockMetadata = JSON.parse(e)), this.debugLogging = "true" === localStorage.getItem(r.d)
					}
				}
				init() {
					this.runtimeInitialized || (this.runtimeInitialized = !0, this.runtime.start())
				}
				getGatewayUrl() {
					return this.gatewayUrl
				}
				setGatewayUrl(t) {
					return this.gatewayUrl = t, this.localStorageAvailable && (t === o.a.devPlatformGatewayUrl ? localStorage.removeItem(r.b) : localStorage.setItem(r.b, t)), this.reloadSubreddit(), this.subActors.length
				}
				getDebugLogging() {
					return this.debugLogging
				}
				setDebugLogging(t) {
					this.debugLogging = t, localStorage.setItem(r.d, t ? "true" : "false")
				}
				loadMockData(t) {
					this.mockMetadata = t, this.localStorageAvailable && (t ? localStorage.setItem(r.c, JSON.stringify(t)) : localStorage.removeItem(r.c))
				}
				loadSubreddit(t) {
					var e, a, o, i;
					if (t.id === this.loadedSubId) return null !== (a = null === (e = this.loadedMetadata) || void 0 === e ? void 0 : e.contextActions) && void 0 !== a ? a : [];
					if (this.debugLog("Metadata not yet loaded"), void 0 !== t.devPlatformMetadata ? (this.debugLog("Loading metadata from Subreddit"), this.loadedMetadata = s.i.fromJSON(JSON.parse(atob(t.devPlatformMetadata))), this.debugLog("metadata.contextActions:", null === (o = this.loadedMetadata) || void 0 === o ? void 0 : o.contextActions), this.debugLog("metadata.installedRemoteApps:", null === (i = this.loadedMetadata) || void 0 === i ? void 0 : i.installedRemoteApps)) : null !== this.mockMetadata && (this.debugLog("Using mock metadata"), this.loadedMetadata = this.mockMetadata), !this.loadedMetadata) return this.debugLog("No metadata found"), [];
					this.unloadSubreddit(), this.loadedSubId = t.id, this.subActors = [];
					const r = this.loadedMetadata.installedRemoteApps.reduce((t, e) => (t.add(e.hostname.split(".")[0]), t), new Set);
					return this.debugLog(`Connecting to ${this.loadedMetadata.installedRemoteApps.length} remote actors from ${r.size} apps`), this.loadedMetadata.installedRemoteApps.forEach(t => {
						const e = {
							hostname: t.hostname,
							provides: s.h.fromSerializable(t.provides[0])
						};
						this.loadActor(e), this.subActors.push(e)
					}), this.debugLog(`Found ${this.loadedMetadata.contextActions.reduce((t,e)=>t+e.actions.actions.length,0)} actions across ${this.loadedMetadata.contextActions.length} actors`), this.loadedMetadata.contextActions
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
						a = {
							"devvit-installation": s.L.fromPartial({
								values: [e[0]]
							}),
							"devvit-actor": s.L.fromPartial({
								values: [e[2]]
							})
						};
					this.runtime.bindRemoteActor(t.provides, t.hostname, this.gatewayUrl, a)
				}
				reloadSubreddit() {
					this.unloadSubreddit(), this.subActors.forEach(t => this.loadActor(t))
				}
				debugLog() {
					if (this.debugLogging) {
						for (var t = arguments.length, e = new Array(t), a = 0; a < t; a++) e[a] = arguments[a];
						console.debug.apply(null, e)
					}
				}
			};
			e.a = h
		},
		"ignored /drone/src/node_modules/cron-parser/lib fs": function(t, e) {}
	}
]);
//# sourceMappingURL=https://www.redditstatic.com/desktop2x/devPlatform-components-AdminPanel-Utilities-DevPlatformConfig.a0b6e3c15cd6e871aaa6.js.map