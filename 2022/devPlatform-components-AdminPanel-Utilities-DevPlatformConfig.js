// https://www.redditstatic.com/desktop2x/devPlatform-components-AdminPanel-Utilities-DevPlatformConfig.107f05ed4b827ef2ff7b.js
// Retrieved at 9/13/2022, 4:10:04 PM by Reddit Dataminer v1.0.0
(window.__LOADABLE_LOADED_CHUNKS__ = window.__LOADABLE_LOADED_CHUNKS__ || []).push([
	["devPlatform-components-AdminPanel-Utilities-DevPlatformConfig"], {
		"./src/devPlatform/components/AdminPanel/Utilities/DevPlatformConfig/index.tsx": function(t, e, a) {
			"use strict";
			a.r(e);
			var o = a("./node_modules/react/index.js"),
				s = a.n(o),
				r = a("./node_modules/react-redux/es/index.js"),
				i = a("./node_modules/reselect/es/index.js"),
				n = a("./src/config.ts"),
				l = a("./src/reddit/actions/toaster.ts"),
				d = a("./src/reddit/components/AdminPanel/Utilities/Section.tsx"),
				c = a("./src/reddit/controls/Button/index.tsx"),
				u = a("./src/reddit/models/Toast/index.ts"),
				g = a("./src/devPlatform/singleton/runtime.ts");
			const m = Object(r.b)(() => Object(i.c)({}), t => ({
				showToast: (e, a) => {
					t(Object(l.f)(Object(l.e)(e, a)))
				}
			}));
			class h extends s.a.Component {
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
			e.default = m(h)
		},
		"./src/devPlatform/constants.ts": function(t, e, a) {
			"use strict";
			a.d(e, "b", (function() {
				return o
			})), a.d(e, "c", (function() {
				return s
			})), a.d(e, "d", (function() {
				return r
			})), a.d(e, "e", (function() {
				return i
			})), a.d(e, "a", (function() {
				return n
			}));
			const o = "devvit-gateway-url",
				s = "devvit-mock-metadata",
				r = "devvit-debug-logging",
				i = "DEV_PLAT__OPEN_USER_INPUT_MODAL";
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
				r = a("./node_modules/@devvit/runtimes/platform/browser/BrowserRuntime.js"),
				i = a("./src/devPlatform/constants.ts"),
				n = a("./node_modules/@devvit/runtimes/worker.bootstrap.cjs"),
				l = a("./node_modules/@devvit/runtimes/worker.echo.cjs"),
				d = a("./node_modules/@devvit/runtimes/worker.redditapi.cjs"),
				c = a("./node_modules/@devvit/runtimes/worker.supervisor.cjs"),
				u = a("./src/lib/localStorageAvailable/index.ts");
			const g = new Map([
				["bootstrap", n.a],
				["supervisor", c.a],
				["redditapi", d.a],
				["echo", l.a]
			]);
			const m = new class {
				constructor() {
					var t;
					if (this.runtime = new r.a(g), this.gatewayUrl = "", this.loadedSubId = "", this.subActors = [], this.mockMetadata = null, this.localStorageAvailable = Object(u.a)(), this.runtimeInitialized = !1, this.debugLogging = !1, this.localStorageAvailable) {
						this.gatewayUrl = null !== (t = localStorage.getItem(i.b)) && void 0 !== t ? t : o.a.devPlatformGatewayUrl;
						const e = localStorage.getItem(i.c);
						e && (this.mockMetadata = JSON.parse(e)), this.debugLogging = "true" === localStorage.getItem(i.d)
					}
				}
				async init() {
					this.runtimeInitialized || (this.runtimeInitialized = !0, await this.runtime.start())
				}
				getGatewayUrl() {
					return this.gatewayUrl
				}
				setGatewayUrl(t) {
					return this.gatewayUrl = t, this.localStorageAvailable && (t === o.a.devPlatformGatewayUrl ? localStorage.removeItem(i.b) : localStorage.setItem(i.b, t)), this.reloadSubreddit(), this.subActors.length
				}
				getDebugLogging() {
					return this.debugLogging
				}
				setDebugLogging(t) {
					this.debugLogging = t, localStorage.setItem(i.d, t ? "true" : "false")
				}
				loadMockData(t) {
					this.mockMetadata = t, this.localStorageAvailable && (t ? localStorage.setItem(i.c, JSON.stringify(t)) : localStorage.removeItem(i.c))
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
			e.a = m
		},
		"ignored /drone/src/node_modules/cron-parser/lib fs": function(t, e) {}
	}
]);
//# sourceMappingURL=https://www.redditstatic.com/desktop2x/devPlatform-components-AdminPanel-Utilities-DevPlatformConfig.107f05ed4b827ef2ff7b.js.map