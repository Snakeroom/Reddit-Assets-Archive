// https://www.redditstatic.com/desktop2x/8.daf2158bbbfe4e603779.js
// Retrieved at 6/20/2023, 11:10:04 AM by Reddit Dataminer v1.0.0
(window.__LOADABLE_LOADED_CHUNKS__ = window.__LOADABLE_LOADED_CHUNKS__ || []).push([
	[8], {
		"./node_modules/@web3modal/standalone/dist/index.es.js": function(e, t, n) {
			"use strict";
			n.r(t), n.d(t, "Web3Modal", (function() {
				return d
			}));
			var o = n("./node_modules/@web3modal/standalone/node_modules/@web3modal/core/dist/index.es.js"),
				s = Object.defineProperty,
				r = Object.getOwnPropertySymbols,
				a = Object.prototype.hasOwnProperty,
				i = Object.prototype.propertyIsEnumerable,
				l = (e, t, n) => t in e ? s(e, t, {
					enumerable: !0,
					configurable: !0,
					writable: !0,
					value: n
				}) : e[t] = n,
				c = (e, t) => {
					for (var n in t || (t = {})) a.call(t, n) && l(e, n, t[n]);
					if (r)
						for (var n of r(t)) i.call(t, n) && l(e, n, t[n]);
					return e
				};
			class d {
				constructor(e) {
					this.openModal = o.g.open, this.closeModal = o.g.close, this.subscribeModal = o.g.subscribe, this.setTheme = o.j.setThemeConfig, o.j.setThemeConfig(e), o.c.setConfig(c({
						enableStandaloneMode: !0
					}, e)), this.initUi()
				}
				async initUi() {
					if (typeof window < "u") {
						await n.e(3).then(n.bind(null, "./node_modules/@web3modal/standalone/node_modules/@web3modal/ui/dist/index.es.js"));
						const e = document.createElement("w3m-modal");
						document.body.insertAdjacentElement("beforeend", e), o.h.setIsUiLoaded(!0)
					}
				}
			}
		},
		"./node_modules/@web3modal/standalone/node_modules/@web3modal/core/dist/index.es.js": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return v
			})), n.d(t, "b", (function() {
				return a
			})), n.d(t, "c", (function() {
				return h
			})), n.d(t, "d", (function() {
				return c
			})), n.d(t, "e", (function() {
				return f
			})), n.d(t, "f", (function() {
				return S
			})), n.d(t, "g", (function() {
				return D
			})), n.d(t, "h", (function() {
				return b
			})), n.d(t, "i", (function() {
				return l
			})), n.d(t, "j", (function() {
				return V
			})), n.d(t, "k", (function() {
				return B
			})), n.d(t, "l", (function() {
				return _
			}));
			n("./node_modules/core-js/modules/web.dom.iterable.js");
			var o = n("./node_modules/@web3modal/standalone/node_modules/valtio/vanilla.js"),
				s = n("./node_modules/node-libs-browser/node_modules/buffer/index.js");
			let r;
			const a = {
					ethereumClient: void 0,
					setEthereumClient(e) {
						r = e
					},
					client() {
						if (r) return r;
						throw new Error("ClientCtrl has no client set")
					}
				},
				i = Object(o.proxy)({
					history: ["ConnectWallet"],
					view: "ConnectWallet",
					data: void 0
				}),
				l = {
					state: i,
					subscribe: e => Object(o.subscribe)(i, () => e(i)),
					push(e, t) {
						e !== i.view && (i.view = e, t && (i.data = t), i.history.push(e))
					},
					reset(e) {
						i.view = e, i.history = [e]
					},
					replace(e) {
						i.history.length > 1 && (i.history[i.history.length - 1] = e, i.view = e)
					},
					goBack() {
						if (i.history.length > 1) {
							i.history.pop();
							const [e] = i.history.slice(-1);
							i.view = e
						}
					},
					setData(e) {
						i.data = e
					}
				},
				c = {
					WALLETCONNECT_DEEPLINK_CHOICE: "WALLETCONNECT_DEEPLINK_CHOICE",
					W3M_VERSION: "W3M_VERSION",
					W3M_PREFER_INJECTED_URL_FLAG: "w3mPreferInjected",
					RECOMMENDED_WALLET_AMOUNT: 9,
					isMobile: () => typeof window < "u" && !(!window.matchMedia("(pointer:coarse)").matches && !/Android|webOS|iPhone|iPad|iPod|BlackBerry|Opera Mini/u.test(navigator.userAgent)),
					isAndroid: () => c.isMobile() && navigator.userAgent.toLowerCase().includes("android"),
					isIos() {
						const e = navigator.userAgent.toLowerCase();
						return c.isMobile() && (e.includes("iphone") || e.includes("ipad"))
					},
					isHttpUrl: e => e.startsWith("http://") || e.startsWith("https://"),
					isArray: e => Array.isArray(e) && e.length > 0,
					formatNativeUrl(e, t, n) {
						if (c.isHttpUrl(e)) return this.formatUniversalUrl(e, t, n);
						let o = e;
						return o.includes("://") || (o = `${o=e.replaceAll("/","").replaceAll(":","")}://`), this.setWalletConnectDeepLink(o, n), `${o}wc?uri=${encodeURIComponent(t)}`
					},
					formatUniversalUrl(e, t, n) {
						if (!c.isHttpUrl(e)) return this.formatNativeUrl(e, t, n);
						let o = e;
						return e.endsWith("/") && (o = e.slice(0, -1)), this.setWalletConnectDeepLink(o, n), `${o}/wc?uri=${encodeURIComponent(t)}`
					},
					wait: async e => new Promise(t => {
						setTimeout(t, e)
					}),
					openHref(e, t) {
						window.open(e, t, "noreferrer noopener")
					},
					setWalletConnectDeepLink(e, t) {
						localStorage.setItem(c.WALLETCONNECT_DEEPLINK_CHOICE, JSON.stringify({
							href: e,
							name: t
						}))
					},
					setWalletConnectAndroidDeepLink(e) {
						const [t] = e.split("?");
						localStorage.setItem(c.WALLETCONNECT_DEEPLINK_CHOICE, JSON.stringify({
							href: t,
							name: "Android"
						}))
					},
					removeWalletConnectDeepLink() {
						localStorage.removeItem(c.WALLETCONNECT_DEEPLINK_CHOICE)
					},
					setWeb3ModalVersionInStorage() {
						typeof localStorage < "u" && localStorage.setItem(c.W3M_VERSION, "2.4.2")
					},
					getWalletRouterData() {
						var e;
						const t = null == (e = l.state.data) ? void 0 : e.Wallet;
						if (!t) throw new Error('Missing "Wallet" view data');
						return t
					},
					getSwitchNetworkRouterData() {
						var e;
						const t = null == (e = l.state.data) ? void 0 : e.SwitchNetwork;
						if (!t) throw new Error('Missing "SwitchNetwork" view data');
						return t
					},
					isPreferInjectedFlag: () => typeof location < "u" && new URLSearchParams(location.search).has(c.W3M_PREFER_INJECTED_URL_FLAG)
				},
				d = typeof location < "u" && (location.hostname.includes("localhost") || location.protocol.includes("https")),
				u = Object(o.proxy)({
					enabled: d,
					userSessionId: "",
					events: [],
					connectedWalletId: void 0
				}),
				f = {
					state: u,
					subscribe: e => Object(o.subscribe)(u.events, () => e(Object(o.snapshot)(u.events[u.events.length - 1]))),
					initialize() {
						u.enabled && typeof crypto < "u" && (u.userSessionId = crypto.randomUUID())
					},
					setConnectedWalletId(e) {
						u.connectedWalletId = e
					},
					click(e) {
						if (u.enabled) {
							const t = {
								type: "CLICK",
								name: e.name,
								userSessionId: u.userSessionId,
								timestamp: Date.now(),
								data: e
							};
							u.events.push(t)
						}
					},
					track(e) {
						if (u.enabled) {
							const t = {
								type: "TRACK",
								name: e.name,
								userSessionId: u.userSessionId,
								timestamp: Date.now(),
								data: e
							};
							u.events.push(t)
						}
					},
					view(e) {
						if (u.enabled) {
							const t = {
								type: "VIEW",
								name: e.name,
								userSessionId: u.userSessionId,
								timestamp: Date.now(),
								data: e
							};
							u.events.push(t)
						}
					}
				},
				p = Object(o.proxy)({
					selectedChain: void 0,
					chains: void 0,
					standaloneChains: void 0,
					standaloneUri: void 0,
					isStandalone: !1,
					isAuth: !1,
					isCustomDesktop: !1,
					isCustomMobile: !1,
					isDataLoaded: !1,
					isUiLoaded: !1,
					isPreferInjected: !1,
					walletConnectVersion: 1
				}),
				b = {
					state: p,
					subscribe: e => Object(o.subscribe)(p, () => e(p)),
					setChains(e) {
						p.chains = e
					},
					setStandaloneChains(e) {
						p.standaloneChains = e
					},
					setStandaloneUri(e) {
						p.standaloneUri = e
					},
					getSelectedChain() {
						const e = a.client().getNetwork().chain;
						return e && (p.selectedChain = e), p.selectedChain
					},
					setSelectedChain(e) {
						p.selectedChain = e
					},
					setIsStandalone(e) {
						p.isStandalone = e
					},
					setIsCustomDesktop(e) {
						p.isCustomDesktop = e
					},
					setIsCustomMobile(e) {
						p.isCustomMobile = e
					},
					setIsDataLoaded(e) {
						p.isDataLoaded = e
					},
					setIsUiLoaded(e) {
						p.isUiLoaded = e
					},
					setWalletConnectVersion(e) {
						p.walletConnectVersion = e
					},
					setIsPreferInjected(e) {
						p.isPreferInjected = e
					},
					setIsAuth(e) {
						p.isAuth = e
					}
				},
				g = Object(o.proxy)({
					projectId: "",
					mobileWallets: void 0,
					desktopWallets: void 0,
					walletImages: void 0,
					chainImages: void 0,
					tokenImages: void 0,
					tokenContracts: void 0,
					standaloneChains: void 0,
					enableStandaloneMode: !1,
					enableAuthMode: !1,
					enableNetworkView: !1,
					enableAccountView: !0,
					enableExplorer: !0,
					defaultChain: void 0,
					explorerExcludedWalletIds: void 0,
					explorerRecommendedWalletIds: void 0,
					termsOfServiceUrl: void 0,
					privacyPolicyUrl: void 0
				}),
				h = {
					state: g,
					subscribe: e => Object(o.subscribe)(g, () => e(g)),
					setConfig(e) {
						var t, n, o, s;
						f.initialize(), b.setStandaloneChains(e.standaloneChains), b.setIsStandalone(!(null == (t = e.standaloneChains) || !t.length) || !!e.enableStandaloneMode), b.setIsAuth(!!e.enableAuthMode), b.setIsCustomMobile(!(null == (n = e.mobileWallets) || !n.length)), b.setIsCustomDesktop(!(null == (o = e.desktopWallets) || !o.length)), b.setWalletConnectVersion(null != (s = e.walletConnectVersion) ? s : 1), b.state.isStandalone || (b.setChains(a.client().chains), b.setIsPreferInjected(a.client().isInjectedProviderInstalled() && c.isPreferInjectedFlag())), e.defaultChain && b.setSelectedChain(e.defaultChain), c.setWeb3ModalVersionInStorage(), Object.assign(g, e)
					}
				},
				m = Object(o.proxy)({
					address: void 0,
					profileName: void 0,
					profileAvatar: void 0,
					profileLoading: !1,
					balanceLoading: !1,
					balance: void 0,
					isConnected: !1
				}),
				v = {
					state: m,
					subscribe: e => Object(o.subscribe)(m, () => e(m)),
					getAccount() {
						const e = a.client().getAccount();
						m.address = e.address, m.isConnected = e.isConnected
					},
					async fetchProfile(e, t) {
						var n;
						try {
							m.profileLoading = !0;
							const o = null != t ? t : m.address,
								s = null == (n = b.state.chains) ? void 0 : n.find(e => 1 === e.id);
							if (o && s) {
								const t = await a.client().fetchEnsName({
									address: o,
									chainId: 1
								});
								if (t) {
									const n = await a.client().fetchEnsAvatar({
										name: t,
										chainId: 1
									});
									n && await e(n), m.profileAvatar = n
								}
								m.profileName = t
							}
						} finally {
							m.profileLoading = !1
						}
					},
					async fetchBalance(e) {
						try {
							const {
								chain: t
							} = a.client().getNetwork(), {
								tokenContracts: n
							} = h.state;
							let o;
							t && n && (o = n[t.id]), m.balanceLoading = !0;
							const s = null != e ? e : m.address;
							if (s) {
								const e = await a.client().fetchBalance({
									address: s,
									token: o
								});
								m.balance = {
									amount: e.formatted,
									symbol: e.symbol
								}
							}
						} finally {
							m.balanceLoading = !1
						}
					},
					setAddress(e) {
						m.address = e
					},
					setIsConnected(e) {
						m.isConnected = e
					},
					resetBalance() {
						m.balance = void 0
					},
					resetAccount() {
						m.address = void 0, m.isConnected = !1, m.profileName = void 0, m.profileAvatar = void 0, m.balance = void 0
					}
				},
				w = "https://explorer-api.walletconnect.com";
			async function y(e, t) {
				const n = new URL(e, w);
				return n.searchParams.append("projectId", h.state.projectId), Object.entries(t).forEach(e => {
					let [t, o] = e;
					o && n.searchParams.append(t, String(o))
				}), (await fetch(n)).json()
			}
			const j = {
				getDesktopListings: async e => y("/w3m/v1/getDesktopListings", e),
				getMobileListings: async e => y("/w3m/v1/getMobileListings", e),
				getInjectedListings: async e => y("/w3m/v1/getInjectedListings", e),
				getAllListings: async e => y("/w3m/v1/getAllListings", e),
				getWalletImageUrl: e => `${w}/w3m/v1/getWalletImage/${e}?projectId=${h.state.projectId}`,
				getAssetImageUrl: e => `${w}/w3m/v1/getAssetImage/${e}?projectId=${h.state.projectId}`
			};
			var O = Object.defineProperty,
				I = Object.getOwnPropertySymbols,
				C = Object.prototype.hasOwnProperty,
				E = Object.prototype.propertyIsEnumerable,
				L = (e, t, n) => t in e ? O(e, t, {
					enumerable: !0,
					configurable: !0,
					writable: !0,
					value: n
				}) : e[t] = n;
			const A = c.isMobile(),
				W = Object(o.proxy)({
					wallets: {
						listings: [],
						total: 0,
						page: 1
					},
					injectedWallets: [],
					search: {
						listings: [],
						total: 0,
						page: 1
					},
					recomendedWallets: []
				}),
				S = {
					state: W,
					async getRecomendedWallets() {
						const {
							explorerRecommendedWalletIds: e,
							explorerExcludedWalletIds: t
						} = h.state;
						if ("NONE" === e || "ALL" === t && !e) return W.recomendedWallets;
						if (c.isArray(e)) {
							const t = {
									recommendedIds: e.join(",")
								},
								{
									listings: n
								} = await j.getAllListings(t),
								o = Object.values(n);
							o.sort((t, n) => {
								return e.indexOf(t.id) - e.indexOf(n.id)
							}), W.recomendedWallets = o
						} else {
							const {
								standaloneChains: e,
								walletConnectVersion: n,
								isAuth: o
							} = b.state, s = null == e ? void 0 : e.join(","), r = c.isArray(t), a = {
								page: 1,
								sdks: o ? "auth_v1" : void 0,
								entries: c.RECOMMENDED_WALLET_AMOUNT,
								chains: s,
								version: n,
								excludedIds: r ? t.join(",") : void 0
							}, {
								listings: i
							} = A ? await j.getMobileListings(a) : await j.getDesktopListings(a);
							W.recomendedWallets = Object.values(i)
						}
						return W.recomendedWallets
					},
					async getWallets(e) {
						const t = ((e, t) => {
								for (var n in t || (t = {})) C.call(t, n) && L(e, n, t[n]);
								if (I)
									for (var n of I(t)) E.call(t, n) && L(e, n, t[n]);
								return e
							})({}, e),
							{
								explorerRecommendedWalletIds: n,
								explorerExcludedWalletIds: o
							} = h.state,
							{
								recomendedWallets: s
							} = W;
						if ("ALL" === o) return W.wallets;
						t.search || (s.length ? t.excludedIds = s.map(e => e.id).join(",") : c.isArray(n) && (t.excludedIds = n.join(","))), c.isArray(o) && (t.excludedIds = [t.excludedIds, o].filter(Boolean).join(",")), b.state.isAuth && (t.sdks = "auth_v1");
						const {
							page: r,
							search: a
						} = e, {
							listings: i,
							total: l
						} = A ? await j.getMobileListings(t) : await j.getDesktopListings(t), d = Object.values(i), u = a ? "search" : "wallets";
						return W[u] = {
							listings: [...W[u].listings, ...d],
							total: l,
							page: null != r ? r : 1
						}, {
							listings: d,
							total: l
						}
					},
					async getInjectedWallets() {
						const {
							listings: e
						} = await j.getInjectedListings({}), t = Object.values(e);
						return W.injectedWallets = t, W.injectedWallets
					},
					getWalletImageUrl: e => j.getWalletImageUrl(e),
					getAssetImageUrl: e => j.getAssetImageUrl(e),
					resetSearch() {
						W.search = {
							listings: [],
							total: 0,
							page: 1
						}
					}
				},
				P = Object(o.proxy)({
					pairingUri: "",
					pairingError: !1
				}),
				_ = {
					state: P,
					subscribe: e => Object(o.subscribe)(P, () => e(P)),
					setPairingUri(e) {
						P.pairingUri = e
					},
					setPairingError(e) {
						P.pairingError = e
					}
				},
				k = Object(o.proxy)({
					open: !1
				}),
				D = {
					state: k,
					subscribe: e => Object(o.subscribe)(k, () => e(k)),
					open: async e => new Promise(t => {
						const {
							isStandalone: n,
							isUiLoaded: o,
							isDataLoaded: s,
							isPreferInjected: r,
							selectedChain: i
						} = b.state, {
							isConnected: c
						} = v.state, {
							enableNetworkView: d
						} = h.state;
						if (n) b.setStandaloneUri(null == e ? void 0 : e.uri), b.setStandaloneChains(null == e ? void 0 : e.standaloneChains), l.reset("ConnectWallet");
						else if (null != e && e.route) l.reset(e.route);
						else if (c) l.reset("Account");
						else if (d) l.reset("SelectNetwork");
						else {
							if (r) return a.client().connectConnector("injected", null == i ? void 0 : i.id).catch(e => console.error(e)), void t();
							l.reset("ConnectWallet")
						}
						const {
							pairingUri: u
						} = _.state;
						if (o && s && (n || u || c)) k.open = !0, t();
						else {
							const e = setInterval(() => {
								const n = b.state,
									o = _.state;
								n.isUiLoaded && n.isDataLoaded && (n.isStandalone || o.pairingUri || c) && (clearInterval(e), k.open = !0, t())
							}, 200)
						}
					}),
					close() {
						k.open = !1
					}
				};
			var M = Object.defineProperty,
				U = Object.getOwnPropertySymbols,
				N = Object.prototype.hasOwnProperty,
				x = Object.prototype.propertyIsEnumerable,
				R = (e, t, n) => t in e ? M(e, t, {
					enumerable: !0,
					configurable: !0,
					writable: !0,
					value: n
				}) : e[t] = n;
			const T = Object(o.proxy)({
					themeMode: typeof matchMedia < "u" && matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light"
				}),
				V = {
					state: T,
					subscribe: e => Object(o.subscribe)(T, () => e(T)),
					setThemeConfig(e) {
						const {
							themeMode: t,
							themeVariables: n
						} = e;
						t && (T.themeMode = t), n && (T.themeVariables = ((e, t) => {
							for (var n in t || (t = {})) N.call(t, n) && R(e, n, t[n]);
							if (U)
								for (var n of U(t)) x.call(t, n) && R(e, n, t[n]);
							return e
						})({}, n))
					}
				},
				K = Object(o.proxy)({
					open: !1,
					message: "",
					variant: "success"
				}),
				B = {
					state: K,
					subscribe: e => Object(o.subscribe)(K, () => e(K)),
					openToast(e, t) {
						K.open = !0, K.message = e, K.variant = t
					},
					closeToast() {
						K.open = !1
					}
				};
			typeof window < "u" && (window.Buffer || (window.Buffer = s.Buffer), window.global || (window.global = window), window.process || (window.process = {
				env: {}
			}))
		},
		"./node_modules/@web3modal/standalone/node_modules/proxy-compare/dist/index.modern.js": function(e, t, n) {
			"use strict";
			n.r(t), n.d(t, "affectedToPathList", (function() {
				return v
			})), n.d(t, "createProxy", (function() {
				return p
			})), n.d(t, "getUntracked", (function() {
				return h
			})), n.d(t, "isChanged", (function() {
				return b
			})), n.d(t, "markToTrack", (function() {
				return m
			})), n.d(t, "replaceNewProxy", (function() {
				return w
			})), n.d(t, "trackMemo", (function() {
				return g
			}));
			const o = Symbol(),
				s = Symbol(),
				r = "w";
			let a = (e, t) => new Proxy(e, t);
			const i = Object.getPrototypeOf,
				l = new WeakMap,
				c = e => e && (l.has(e) ? l.get(e) : i(e) === Object.prototype || i(e) === Array.prototype),
				d = e => "object" == typeof e && null !== e,
				u = e => {
					if (Array.isArray(e)) return Array.from(e);
					const t = Object.getOwnPropertyDescriptors(e);
					return Object.values(t).forEach(e => {
						e.configurable = !0
					}), Object.create(i(e), t)
				},
				f = e => e[s] || e,
				p = (e, t, n, i) => {
					if (!c(e)) return e;
					let l = i && i.get(e);
					if (!l) {
						const t = f(e);
						l = (e => Object.values(Object.getOwnPropertyDescriptors(e)).some(e => !e.configurable && !e.writable))(t) ? [t, u(t)] : [t], null == i || i.set(e, l)
					}
					const [d, b] = l;
					let g = n && n.get(d);
					return g && g[1].f === !!b || ((g = ((e, t) => {
						const n = {
							f: t
						};
						let a = !1;
						const i = (t, o) => {
								if (!a) {
									let s = n.a.get(e);
									if (s || (s = {}, n.a.set(e, s)), t === r) s.w = !0;
									else {
										let e = s[t];
										e || (e = new Set, s[t] = e), e.add(o)
									}
								}
							},
							l = {
								get: (t, o) => o === s ? e : (i("k", o), p(Reflect.get(t, o), n.a, n.c, n.t)),
								has: (t, s) => s === o ? (a = !0, n.a.delete(e), !0) : (i("h", s), Reflect.has(t, s)),
								getOwnPropertyDescriptor: (e, t) => (i("o", t), Reflect.getOwnPropertyDescriptor(e, t)),
								ownKeys: e => (i(r), Reflect.ownKeys(e))
							};
						return t && (l.set = l.deleteProperty = () => !1), [l, n]
					})(d, !!b))[1].p = a(b || d, g[0]), n && n.set(d, g)), g[1].a = t, g[1].c = n, g[1].t = i, g[1].p
				},
				b = (e, t, n, o) => {
					if (Object.is(e, t)) return !1;
					if (!d(e) || !d(t)) return !0;
					const s = n.get(f(e));
					if (!s) return !0;
					if (o) {
						const n = o.get(e);
						if (n && n.n === t) return n.g;
						o.set(e, {
							n: t,
							g: !1
						})
					}
					let r = null;
					try {
						for (const n of s.h || [])
							if (r = Reflect.has(e, n) !== Reflect.has(t, n)) return r;
						if (!0 === s.w) {
							if (r = ((e, t) => {
									const n = Reflect.ownKeys(e),
										o = Reflect.ownKeys(t);
									return n.length !== o.length || n.some((e, t) => e !== o[t])
								})(e, t)) return r
						} else
							for (const n of s.o || [])
								if (r = !!Reflect.getOwnPropertyDescriptor(e, n) != !!Reflect.getOwnPropertyDescriptor(t, n)) return r;
						for (const a of s.k || [])
							if (r = b(e[a], t[a], n, o)) return r;
						return null === r && (r = !0), r
					} finally {
						o && o.set(e, {
							n: t,
							g: r
						})
					}
				},
				g = e => !!c(e) && o in e,
				h = e => c(e) && e[s] || null,
				m = (e, t = !0) => {
					l.set(e, t)
				},
				v = (e, t, n) => {
					const o = [],
						s = new WeakSet,
						r = (e, a) => {
							if (s.has(e)) return;
							d(e) && s.add(e);
							const i = d(e) && t.get(f(e));
							if (i) {
								var l, c;
								if (null == (l = i.h) || l.forEach(e => {
										const t = `:has(${String(e)})`;
										o.push(a ? [...a, t] : [t])
									}), !0 === i.w) {
									const e = ":ownKeys";
									o.push(a ? [...a, e] : [e])
								} else {
									var u;
									null == (u = i.o) || u.forEach(e => {
										const t = `:hasOwn(${String(e)})`;
										o.push(a ? [...a, t] : [t])
									})
								}
								null == (c = i.k) || c.forEach(t => {
									n && !("value" in (Object.getOwnPropertyDescriptor(e, t) || {})) || r(e[t], a ? [...a, t] : [t])
								})
							} else a && o.push(a)
						};
					return r(e), o
				},
				w = e => {
					a = e
				}
		},
		"./node_modules/@web3modal/standalone/node_modules/valtio/vanilla.js": function(e, t, n) {
			"use strict";
			var o = n("./node_modules/@web3modal/standalone/node_modules/proxy-compare/dist/index.modern.js"),
				s = function(e) {
					return "object" == typeof e && null !== e
				},
				r = new WeakMap,
				a = new WeakSet,
				i = function(e, t, n, i, l, c, d, u, f) {
					return void 0 === e && (e = Object.is), void 0 === t && (t = function(e, t) {
						return new Proxy(e, t)
					}), void 0 === n && (n = function(e) {
						return s(e) && !a.has(e) && (Array.isArray(e) || !(Symbol.iterator in e)) && !(e instanceof WeakMap) && !(e instanceof WeakSet) && !(e instanceof Error) && !(e instanceof Number) && !(e instanceof Date) && !(e instanceof String) && !(e instanceof RegExp) && !(e instanceof ArrayBuffer)
					}), void 0 === i && (i = function(e) {
						switch (e.status) {
							case "fulfilled":
								return e.value;
							case "rejected":
								throw e.reason;
							default:
								throw e
						}
					}), void 0 === l && (l = new WeakMap), void 0 === c && (c = function(e) {
						function t(t, n, o) {
							return e.apply(this, arguments)
						}
						return t.toString = function() {
							return e.toString()
						}, t
					}((function(e, t, n) {
						void 0 === n && (n = i);
						var s = l.get(e);
						if ((null == s ? void 0 : s[0]) === t) return s[1];
						var d = Array.isArray(e) ? [] : Object.create(Object.getPrototypeOf(e));
						return o.markToTrack(d, !0), l.set(e, [t, d]), Reflect.ownKeys(e).forEach((function(t) {
							if (!Object.getOwnPropertyDescriptor(d, t)) {
								var s = Reflect.get(e, t),
									i = {
										value: s,
										enumerable: !0,
										configurable: !0
									};
								if (a.has(s)) o.markToTrack(s, !1);
								else if (s instanceof Promise) delete i.value, i.get = function() {
									return n(s)
								};
								else if (r.has(s)) {
									var l = r.get(s),
										u = l[0],
										f = l[1];
									i.value = c(u, f(), n)
								}
								Object.defineProperty(d, t, i)
							}
						})), d
					}))), void 0 === d && (d = new WeakMap), void 0 === u && (u = [1, 1]), void 0 === f && (f = function(i) {
						if (!s(i)) throw new Error("object required");
						var l = d.get(i);
						if (l) return l;
						var p = u[0],
							b = new Set,
							g = function(e, t) {
								void 0 === t && (t = ++u[0]), p !== t && (p = t, b.forEach((function(n) {
									return n(e, t)
								})))
							},
							h = u[1],
							m = function(e) {
								return function(t, n) {
									var o = [].concat(t);
									o[1] = [e].concat(o[1]), g(o, n)
								}
							},
							v = new Map,
							w = function(e) {
								var t, n = v.get(e);
								n && (v.delete(e), null == (t = n[1]) || t.call(n))
							},
							y = Array.isArray(i) ? [] : Object.create(Object.getPrototypeOf(i)),
							j = t(y, {
								deleteProperty: function(e, t) {
									var n = Reflect.get(e, t);
									w(t);
									var o = Reflect.deleteProperty(e, t);
									return o && g(["delete", [t], n]), o
								},
								set: function(t, i, l, c) {
									var u = Reflect.has(t, i),
										p = Reflect.get(t, i, c);
									if (u && (e(p, l) || d.has(l) && e(p, d.get(l)))) return !0;
									w(i), s(l) && (l = o.getUntracked(l) || l);
									var h = l;
									if (l instanceof Promise) l.then((function(e) {
										l.status = "fulfilled", l.value = e, g(["resolve", [i], e])
									})).catch((function(e) {
										l.status = "rejected", l.reason = e, g(["reject", [i], e])
									}));
									else {
										!r.has(l) && n(l) && (h = f(l));
										var y = !a.has(h) && r.get(h);
										y && function(e, t) {
											if (b.size) {
												var n = t[3](m(e));
												v.set(e, [t, n])
											} else v.set(e, [t])
										}(i, y)
									}
									return Reflect.set(t, i, h, c), g(["set", [i], l, p]), !0
								}
							});
						d.set(i, j);
						var O = [y, function(e) {
							return void 0 === e && (e = ++u[1]), h === e || b.size || (h = e, v.forEach((function(t) {
								var n = t[0][1](e);
								n > p && (p = n)
							}))), p
						}, c, function(e) {
							b.add(e), 1 === b.size && v.forEach((function(e, t) {
								var n = e[0];
								e[1];
								var o = n[3](m(t));
								v.set(t, [n, o])
							}));
							return function() {
								b.delete(e), 0 === b.size && v.forEach((function(e, t) {
									var n = e[0],
										o = e[1];
									o && (o(), v.set(t, [n]))
								}))
							}
						}];
						return r.set(j, O), Reflect.ownKeys(i).forEach((function(e) {
							var t = Object.getOwnPropertyDescriptor(i, e);
							"value" in t && (j[e] = i[e], delete t.value, delete t.writable), Object.defineProperty(y, e, t)
						})), j
					}), [f, r, a, e, t, n, i, l, c, d, u]
				},
				l = i()[0];
			var c = i;
			t.getVersion = function(e) {
				var t = r.get(e);
				return null == t ? void 0 : t[1]()
			}, t.proxy = function(e) {
				return void 0 === e && (e = {}), l(e)
			}, t.ref = function(e) {
				return a.add(e), e
			}, t.snapshot = function(e, t) {
				var n = r.get(e),
					o = n[0],
					s = n[1];
				return (0, n[2])(o, s(), t)
			}, t.subscribe = function(e, t, n) {
				var o, s = r.get(e),
					a = [],
					i = s[3],
					l = !1,
					c = i((function(e) {
						a.push(e), n ? t(a.splice(0)) : o || (o = Promise.resolve().then((function() {
							o = void 0, l && t(a.splice(0))
						})))
					}));
				return l = !0,
					function() {
						l = !1, c()
					}
			}, t.unstable_buildProxyFunction = c
		}
	}
]);
//# sourceMappingURL=https://www.redditstatic.com/desktop2x/8.daf2158bbbfe4e603779.js.map