// https://www.redditstatic.com/desktop2x/4.c46889909642a7c5aebd.js
// Retrieved at 12/15/2021, 8:10:03 PM by Reddit Dataminer v1.0.0
(window.__LOADABLE_LOADED_CHUNKS__ = window.__LOADABLE_LOADED_CHUNKS__ || []).push([
	[4], {
		"./node_modules/@reddit/avatars.templates.builder/dist/Builder.module.less": function(e, t, a) {
			e.exports = {
				wrapper: "GdKboT4bHIEi3bj0r1nfI",
				menu: "_3CmHtDAYvAG_jE6RNfXenz",
				preview: "_2shLwqcnkQvjwp1jy0rR6U",
				saveNavigation: "_2SZ6uyWswgyGpu6wmiLDVS",
				nftMenu: "_6zE9B8nMZz3Cjf3FmRAHr"
			}
		},
		"./node_modules/@reddit/avatars.templates.builder/dist/index.js": function(e, t, a) {
			"use strict";
			a.r(t), a.d(t, "Builder", (function() {
				return Ia
			}));
			var s = {};
			a.r(s), a.d(s, "SOMETHING_WRONG", (function() {
				return Y
			})), a.d(s, "CLOSET_ONLY_INVALID_AVATAR", (function() {
				return q
			})), a.d(s, "AVATAR_SAVE_SUCCESS", (function() {
				return K
			})), a.d(s, "COMMUNITY_SPACES_SAVE", (function() {
				return X
			}));
			a("./node_modules/core-js/modules/web.dom.iterable.js");
			var o = a("./node_modules/classnames/index.js"),
				n = a.n(o),
				r = a("./node_modules/react/index.js"),
				l = a.n(r),
				c = a("./node_modules/@reddit/avatars.externals/dist/index.js"),
				i = a("./node_modules/@reddit/avatars.utils/dist/index.js"),
				d = a("./node_modules/@reddit/avatars.ui.empty-component/dist/index.js"),
				u = a("./node_modules/react-shadow-root/lib/index.js"),
				m = a.n(u),
				p = a("./node_modules/@reddit/avatars.constants/dist/index.js");
			const v = e => {
				let {
					assets: t,
					className: a,
					forceBodyColor: s,
					id: o,
					frameClassName: n
				} = e;
				const {
					IS_DEVELOPMENT: c
				} = Object(p.b)(), [d, u] = Object(r.useState)([]), v = Object(r.useRef)(null);
				Object(r.useEffect)(() => {
					const e = v.current;
					e && Object(i.rb)(e, "body", s)
				}, [v, s]), Object(r.useEffect)(() => {
					Object(i.jb)(t, o, e => {
						u(e)
					})
				}, [t]);
				return l.a.createElement("div", {
					className: a,
					ref: v,
					"data-testid": "avatar"
				}, d.map((e, t) => {
					let a = null,
						s = "";
					c && (a = e.url, s += `\x3c!-- asset = ${e.url} --\x3e\n`), s += e.data;
					const o = Object(i.O)("avatar:layer", e.id),
						r = Object(i.O)("avatar:layer:content", e.id);
					return l.a.createElement("div", {
						key: t,
						"data-asset": a,
						className: n,
						"data-testid": o
					}, l.a.createElement(m.a, null, l.a.createElement("style", {
						dangerouslySetInnerHTML: {
							__html: "\n    svg {\n      position: absolute;\n      top: 50%;\n      left: 50%;\n      width: 100%;\n      height: 100%;\n      transform: translate(-50%, -50%);\n    }\n    svg * {\n      backface-visibility: hidden;\n      image-rendering:pixelated;\n      shape-rendering:pixelated;\n    }\n  "
						}
					}), l.a.createElement("div", {
						dangerouslySetInnerHTML: {
							__html: s
						},
						"data-testid": r
					})))
				}))
			};
			var b = a("./node_modules/@reddit/avatars.ui.preview/dist/Preview.module.less"),
				f = a.n(b),
				y = a("./node_modules/lodash/pick.js"),
				O = a.n(y),
				h = a("./node_modules/lodash/random.js"),
				E = a.n(h),
				_ = a("./node_modules/lodash/sampleSize.js"),
				g = a.n(_),
				j = a("./node_modules/lodash/shuffle.js"),
				C = a.n(j);
			const k = e => {
				let {
					className: t,
					categories: a,
					trackClick: s
				} = e;
				const {
					setAvatar: o,
					getAvatar: n
				} = Object(c.G)(), {
					styles: r
				} = n(), {
					catalog: {
						accessories: u
					},
					user: m
				} = Object(c.E)(), p = () => {
					s();
					let e = [];
					C()(a).forEach(t => {
						const a = t.sections.reduce((e, t) => {
							return [...e, ...u.filter(e => (function(e, t, a) {
								if (e && t.sectionId === a) {
									return !(t.capabilityRequired && !(e && e.capabilities && e.capabilities.includes(t.capabilityRequired))) && !Object(i.fb)(t)
								}
								return !1
							})(m, e, t.id))]
						}, []);
						g()(a, E()(1, 3)).forEach(t => {
							e = Object(i.D)(e, t)
						})
					}), o(e, O()(r, Object.values(i.t)))
				};
				return l.a.createElement("button", {
					className: t,
					onClick: () => p(),
					"data-testid": "actions:randomize"
				}, l.a.createElement(d.a, null, "Randomize"))
			};
			var w = a("./node_modules/@reddit/avatars.ui.loading-spinner/dist/index.js"),
				N = a("./node_modules/@reddit/avatars.ui.actions-menu/dist/ShareFlyout/ShareFlyout.module.less"),
				S = a.n(N);
			const A = {
					text: Object(d.b)("Avatar download complete", "Avatar downloaded successfully."),
					kind: i.y.Success
				},
				I = {
					text: Object(d.b)("Avatar link copied to clipboard", "Avatar link generation succeeded. Copied link to clipboard."),
					kind: i.y.Success
				},
				M = {
					text: Object(d.b)("Avatar download failed. Please try again", "Notification, error message: Avatar download failed"),
					kind: i.y.Error
				},
				T = {
					text: Object(d.b)("Avatar link generation failed", "Notification, error message: Copy Avatar link failed"),
					kind: i.y.Error
				},
				R = e => {
					let {
						downloading: t,
						flyoutRef: a,
						updateDownloading: s,
						toggleFlyout: o
					} = e;
					const [u, m] = Object(r.useState)(!1), p = Object(i.wb)(), v = Object(c.O)(), {
						getAvatarInfoForSave: b
					} = Object(c.G)(), {
						downloadAvatarImageData: f,
						saveAvatar: y
					} = Object(c.N)();
					return l.a.createElement("div", {
						className: S.a.flyout,
						ref: a,
						"data-testid": "actions:share:flyout"
					}, l.a.createElement("button", {
						"data-testid": "actions:share:flyout:share",
						className: n()(S.a.actionLink, {
							[S.a.active]: u
						}),
						onClick: async () => {
							if (!t) {
								v(Object(c.o)(c.d.COMPLETE_SHARE)), m(!0);
								const {
									accessoryIds: e,
									styles: t
								} = b(), a = await y(e, t, {
									[i.w.SHARE]: !0
								});
								if (null == a || !a.shareLink) return p(T), void m(!1);
								const s = document.createElement("textarea");
								s.value = a.shareLink, document.body.appendChild(s), s.select(), document.execCommand("copy"), document.body.removeChild(s), p(I), m(!1), o()
							}
						},
						disabled: t || u
					}, u ? l.a.createElement("div", {
						className: S.a.actionIcon
					}, l.a.createElement(w.b, null)) : l.a.createElement("div", {
						className: n()(S.a.actionIcon, S.a.copyIcon)
					}), l.a.createElement("span", {
						className: S.a.actionText
					}, l.a.createElement(d.a, {
						desc: "Copy a link to your avatar to your computer's clipboard."
					}, "Share this Avatar"))), l.a.createElement("button", {
						"data-testid": "actions:share:flyout:download",
						className: n()(S.a.actionLink, {
							[S.a.active]: t
						}),
						onClick: async () => {
							if (!t) {
								s(!0), v(Object(c.o)(c.d.ACTIVATE_DOWNLOAD));
								const {
									accessoryIds: e,
									styles: t
								} = b();
								await f(e, t) ? (o(), p(A)) : p(M), s(!1)
							}
						},
						disabled: t || u
					}, t ? l.a.createElement("div", {
						className: S.a.actionIcon
					}, l.a.createElement(w.b, null)) : l.a.createElement("div", {
						className: n()(S.a.actionIcon, S.a.downloadIcon)
					}), l.a.createElement("span", {
						className: S.a.actionText
					}, l.a.createElement(d.a, {
						desc: t ? "Currently downloading Avatar image file" : "Download Avatar image file"
					}, t ? "Downloading..." : "Download Avatar"))), l.a.createElement("div", {
						className: S.a.flyoutDescription,
						"data-testid": "actions:share:flyout:description"
					}, l.a.createElement(d.a, {
						desc: "Avatars and avatar visual elements © Reddit."
					}, "Avatars and avatar visual elements © Reddit.", " ", l.a.createElement("a", {
						href: "https://reddit.zendesk.com/hc/en-us/articles/360050641932",
						target: "_blank",
						rel: "noopener noreferrer"
					}, l.a.createElement(d.a, {
						desc: "Link to learn more about Reddit copyrights."
					}, "Learn more")))))
				};
			var B = a("./node_modules/@reddit/avatars.ui.actions-menu/dist/ActionsMenu.module.less"),
				x = a.n(B);
			const L = e => {
				let {
					categories: t,
					className: a,
					showShareAndDownload: s
				} = e;
				const {
					avatarHistory: o,
					redo: u,
					undo: m
				} = Object(c.G)(), p = o(), {
					isExperimentEnabled: v
				} = Object(c.K)(), b = v(i.i.SHARE_AND_DOWNLOAD_EXPERIMENT), [f, y] = Object(r.useState)(!1), [O, h] = Object(r.useState)(!1), E = Object(r.useRef)(null), _ = Object(r.useRef)(null), g = Object(c.O)();
				Object(i.vb)([E, _], e => {
					y(e)
				}, f && !O);
				const j = p.history.length > 2 && 1 !== p.current,
					C = p.current !== p.history.length - 1,
					w = Object(d.b)("Undo", "Action: Undo last avatar action"),
					N = Object(d.b)("Redo", "Action: Redo last avatar action"),
					S = () => {
						f || g(Object(c.o)(c.d.ENTER_SHARE_AND_DOWNLOAD)), O || y(!f)
					};
				return l.a.createElement("div", {
					className: n()(x.a.container, a),
					"data-testid": "actions"
				}, b && s && l.a.createElement(l.a.Fragment, null, l.a.createElement("button", {
					"data-testid": "actions:share",
					className: n()(x.a.share, x.a.action),
					onClick: S,
					ref: E
				}, l.a.createElement(d.a, {
					desc: "Action: Share Avatar Link"
				}, "Share")), f && l.a.createElement(R, {
					flyoutRef: _,
					downloading: O,
					updateDownloading: h,
					toggleFlyout: S
				})), l.a.createElement("button", {
					"data-testid": "actions:redo",
					className: n()(x.a.redo, x.a.action, {
						[x.a.disabled]: !C
					}),
					onClick: () => {
						g(Object(c.h)("redo")), u()
					},
					title: N,
					disabled: !C
				}, N), l.a.createElement("button", {
					"data-testid": "actions:undo",
					className: n()(x.a.undo, x.a.action, {
						[x.a.disabled]: !j
					}),
					onClick: () => {
						g(Object(c.h)("undo")), m()
					},
					title: w,
					disabled: !j
				}, w), l.a.createElement(k, {
					className: n()(x.a.randomize, x.a.action),
					categories: t,
					trackClick: () => g(Object(c.h)("random"))
				}))
			};
			var P = a("./node_modules/@reddit/avatars.ui.cta-button/dist/CTAButton.module.less"),
				W = a.n(P),
				F = a("./node_modules/@reddit/avatars.ui.button/dist/Button.module.less"),
				U = a.n(F);

			function H() {
				return (H = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var a = arguments[t];
						for (var s in a) Object.prototype.hasOwnProperty.call(a, s) && (e[s] = a[s])
					}
					return e
				}).apply(this, arguments)
			}
			const D = e => {
				let {
					className: t,
					children: a,
					...s
				} = e;
				return l.a.createElement("button", H({
					className: n()(U.a.button, t)
				}, s), a)
			};

			function z() {
				return (z = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var a = arguments[t];
						for (var s in a) Object.prototype.hasOwnProperty.call(a, s) && (e[s] = a[s])
					}
					return e
				}).apply(this, arguments)
			}
			const Q = Object(d.b)("Save", "Button: Save avatar"),
				G = Object(d.b)("...", "Loading Indicator"),
				V = e => {
					let {
						className: t,
						disabled: a,
						text: s = Q,
						onClick: o,
						secondary: c = !1,
						small: i = !1,
						...d
					} = e;
					const [u, m] = Object(r.useState)(!1), p = (() => {
						const e = Object(r.useRef)(!1),
							t = Object(r.useCallback)(() => e.current, []);
						return Object(r.useEffect)(() => (e.current = !0, () => {
							e.current = !1
						}), []), Object(r.useCallback)(e => new Promise(async a => {
							try {
								await e()
							} catch {} finally {
								t() && a()
							}
						}), [])
					})();
					return l.a.createElement(D, z({
						className: n()(W.a.ctaButton, {
							[W.a.secondary]: c,
							[W.a.small]: i
						}, t),
						disabled: u || a,
						onClick: () => {
							u || (m(!0), p(o).then(() => m(!1)))
						}
					}, d), u ? G : s)
				},
				Y = {
					text: Object(i.H)("Something went wrong", "Notification, error message: generic error message presented in a notification,"),
					kind: i.y.Error
				},
				q = {
					text: Object(i.H)("Oops! Some accessories from your look are no longer available.", "Notification, error message: avatar contains closet only accessories, add all Clost Only accesories to your closet before saving."),
					kind: i.y.Error
				},
				K = {
					text: Object(i.H)("Avatar successfully saved!", "Notification, success message: avatar save has succeeded"),
					kind: i.y.Success
				},
				X = {
					text: Object(i.H)("Awesome! Avatar successfully savd & you’re on the waitlist for Community Spaces - we’ll let you know as soon as we launch.", "Notification, success: avatar saved within community spaces entrypoint"),
					kind: i.y.Success
				},
				J = () => {
					const {
						user: e
					} = Object(c.Q)(), t = Object(c.O)(), a = Object(c.F)(), {
						saveAvatar: s
					} = Object(c.N)(), o = Object(i.wb)();
					return l.a.createElement(V, {
						small: !0,
						onClick: async () => {
							const n = Object(c.f)(),
								r = n.history[n.current],
								{
									wornAccessories: l
								} = r,
								d = Object(c.s)(),
								{
									updateFullClosetModal: u
								} = Object(i.ub)();
							if (!e) return;
							if (t(Object(c.q)("save")), !a(l)) return void o(q);
							const m = l.filter(e => e.state === i.a.CLOSET_ONLY && !d.accessories[e.id]),
								p = d.maxSlots - d.occupiedSlots;
							if (p < m.length) return void u({
								open: !0,
								numOver: m.length - p
							});
							const {
								accessoryIds: v,
								colorsUsed: b
							} = Object(i.M)(r);
							if (await s(v, b, {
									[i.w.SET]: !0
								})) {
								const e = Object(i.W)() === i.j.CommunitySpaces;
								o(e ? X : K)
							} else o(Y)
						},
						"data-testid": "actions:save"
					})
				},
				Z = Object(i.H)("Get Premium", "Button: Get premium to proceed to save avatar"),
				$ = Object(i.H)("You are wearing an exclusive accessory. Unlock with Premium.", "Label: explanation that exclusive content requires a premium subscription"),
				ee = e => {
					let {
						className: t,
						telemetryPage: a = "avatar_premium_accessory_upsell",
						hideSubtext: s = !1
					} = e;
					const o = Object(c.O)();
					return l.a.createElement(l.a.Fragment, null, l.a.createElement(V, {
						small: !0,
						onClick: async () => {
							o(Object(c.j)({
								pageType: a
							})), Object(i.G)()
						},
						text: Z,
						"data-testid": "actions:save",
						className: t
					}), !s && l.a.createElement("p", {
						className: W.a.subText
					}, $))
				},
				te = e => {
					let {
						className: t,
						categories: a,
						nfts: s
					} = e;
					const {
						updateWearingModal: o
					} = Object(i.ub)(), [u, m] = Object(r.useState)([]), p = Object(r.useRef)(null), {
						liveAvatar: b
					} = Object(c.G)(), {
						wornAccessories: y,
						activeUserAttribution: O
					} = b(), h = y.filter(e => !Object(i.K)(e)), {
						accessories: E
					} = Object(c.C)(), {
						username: _
					} = Object(i.Z)(), g = Object(c.F)(), j = y.find(e => e.tags.includes(i.o)), C = j && s.find(e => {
						var t;
						return (null === (t = e.accessory) || void 0 === t ? void 0 : t.id) === j.id
					}) || null;
					Object(r.useEffect)(() => {
						const e = [];
						Object(i.B)(y) ? Object(i.I)(E, y).forEach(t => {
							t.tags.includes(i.p) && e.push(...t.assets)
						}) : Object(i.I)(E, y).forEach(t => {
							e.push(...t.assets)
						}), m(e)
					}, [y, E]);
					const k = function() {
						if (void 0 !== typeof window) {
							const e = window.location.search.match(/forcePremium=([01])/);
							return !!e && "1" === e[1]
						}
						return !1
					}() || !g(y);
					return l.a.createElement("div", {
						className: f.a.preview
					}, l.a.createElement(L, {
						showShareAndDownload: !C,
						categories: a
					}), l.a.createElement("div", {
						ref: p,
						className: n()(f.a.container, t),
						"data-testid": "preview"
					}, l.a.createElement(v, {
						className: f.a.rendering,
						assets: u,
						frameClassName: f.a.frame
					}), O && l.a.createElement("p", {
						className: f.a.activeUserAttribution
					}, l.a.createElement(d.a, {
						desc: "Label: Shared avatar creator attribution"
					}, "By ", l.a.createElement(d.a, {
						name: "username"
					}, `u/${_}`)))), l.a.createElement("nav", {
						className: f.a.saveNavigation
					}, l.a.createElement("button", {
						className: n()(f.a.wearingButton, {
							[f.a.disabled]: !!h.length
						}),
						onClick: () => o(!0)
					}, l.a.createElement("span", {
						className: f.a.wearingCount
					}, h.length), "Wearing"), C ? l.a.createElement(Ee, {
						nft: C
					}) : k ? l.a.createElement(ee, null) : l.a.createElement(J, null)))
				};
			var ae = a("./node_modules/@apollo/client/react/hooks/useReactiveVar.js"),
				se = a("./node_modules/@reddit/avatars.ui.svgs/dist/index.js"),
				oe = a("./node_modules/lodash/isElement.js"),
				ne = a.n(oe),
				re = a("./node_modules/react-dom/index.js"),
				le = a("./node_modules/@reddit/avatars.ui.modal-root/dist/ModalRoot.module.less"),
				ce = a.n(le);
			const ie = e => {
				let {
					children: t,
					className: a,
					toggleModalIsOpen: s
				} = e, o = document.getElementById("avatar-modal");
				const c = Object(r.useMemo)(() => document.createElement("div"), []),
					i = Object(r.useRef)(null);
				Object(r.useEffect)(() => (ne()(o) || ((o = document.createElement("div")).setAttribute("id", "avatar-modal"), document.body.appendChild(o)), o.appendChild(c), document.body.style.overflow = "hidden", () => {
					ne()(o) && (o.removeChild(c), document.body.style.overflow = "auto")
				}), [o]);
				return Object(re.createPortal)(l.a.createElement("div", {
					className: ce.a.modalContainer
				}, l.a.createElement("div", {
					className: ce.a.modalOverlay,
					onClick: s,
					onWheel: e => {
						e.preventDefault()
					}
				}), l.a.createElement("div", {
					className: n()(ce.a.modalWrapper, a),
					style: {
						transform: "translateY(0)",
						opacity: 1
					},
					ref: i
				}, l.a.createElement(l.a.Fragment, null, t))), c)
			};
			var de = a("./node_modules/@reddit/avatars.ui.modal-root/dist/close.png"),
				ue = a.n(de);
			const me = [{
				heading: Object(d.b)("Non-fungible and highly collectable", "Non-fungible and highly collectable"),
				description: Object(d.b)("We created a set of unique Reddit Avatars. Only one copy of each exists. And the only proven owner can use it on Reddit.", "We created a set of unique Reddit Avatars. Only one copy of each exists. And the only proven owner can use it on Reddit."),
				icon: se.g
			}, {
				heading: Object(d.b)("Purchasable through OpenSea auction", "Purchasable through OpenSea auction"),
				description: Object(d.b)("CryptoSnoo auctions take place in OpenSea, one of the top NFT auction platforms around. Once the auction starts, anyone can place bids and watch the action unfold.", "CryptoSnoo auctions take place in OpenSea, one of the top NFT auction platforms around. Once the auction starts, anyone can place bids and watch the action unfold."),
				icon: se.f
			}, {
				heading: Object(d.b)("Connected to your crypto wallet", "Connected to your crypto wallet"),
				description: Object(d.b)("To add CryptoSnoos to your profile, connect your Reddit account to a MetaMask wallet containing the CryptoSnoo NFT.", "To add CryptoSnoos to your profile, connect your Reddit account to a MetaMask wallet containing the CryptoSnoo NFT."),
				icon: se.i
			}, {
				heading: Object(d.b)("Available through Reddit’s avatar builder", "Available through Reddit’s avatar builder"),
				description: Object(d.b)("Access CryptoSnoos through the NFT section of Reddit’s avatar builder, where you can see what CryptoSnoos are going for these days and get in on the action.", "Access CryptoSnoos through the NFT section of Reddit’s avatar builder, where you can see what CryptoSnoos are going for these days and get in on the action."),
				icon: se.h
			}];
			var pe = a("./node_modules/@reddit/avatars.ui.crypto-wallet-modal/dist/CryptoWalletModal.module.less"),
				ve = a.n(pe);
			let be;
			! function(e) {
				e[e.Loading = 0] = "Loading", e[e.Supported = 1] = "Supported", e[e.Unsupported = 2] = "Unsupported"
			}(be || (be = {}));
			const fe = e => {
				let {
					isOpen: t,
					toggleModalIsOpen: a,
					onConnected: s,
					onCloseModal: o
				} = e;
				const [c, u] = Object(r.useState)(!1), [m, p] = Object(r.useState)(""), [v, b] = Object(r.useState)(be.Loading), [f, y] = Object(r.useState)([]), O = Object(r.useCallback)(e => {
					e = e.filter(e => "metamask" === e), y(e), b(e.length ? be.Supported : be.Unsupported)
				}, []);
				Object(i.tb)(O);
				const h = Object(r.useCallback)(async (e, t) => {
					if (t.stopPropagation(), t.preventDefault(), !c) {
						u(!0);
						try {
							const t = void 0 !== window ? Object(i.L)(window.ethereum, e) : null;
							if (!t) throw new Error("Unable to find your wallet provider");
							const a = new i.k(t, e);
							await a.connect(), s(a)
						} catch (a) {
							p(`Unable to connect your ${e} wallet`)
						}
						u(!1)
					}
				}, [c]);
				return l.a.createElement(ie, {
					isOpen: t,
					toggleModalIsOpen: a,
					className: ve.a.modalWrapper
				}, l.a.createElement("div", {
					className: ve.a.contentWrapper
				}, c && l.a.createElement(w.a, {
					className: ve.a.loadingOverlay,
					loadingMessage: null
				}), l.a.createElement("div", {
					className: c ? ve.a.isLoading : ""
				}, l.a.createElement("div", {
					className: ve.a.header
				}, l.a.createElement("h1", null, l.a.createElement(d.a, {
					desc: "Unique Reddit Avatars"
				}, "Connect Your Crypto Wallet...")), l.a.createElement("button", {
					className: ve.a.closeBtn,
					onClick: o
				}, l.a.createElement(se.b, {
					className: ve.a.closeBtnIcon
				}))), l.a.createElement("div", {
					className: ve.a.mainContent
				}, me.map((e, t) => l.a.createElement("div", {
					className: ve.a.infoRow,
					key: t
				}, l.a.createElement("div", {
					className: ve.a.icon
				}, l.a.createElement("img", {
					src: e.icon,
					alt: Object(d.b)("nft sketch", "nft sketch")
				})), l.a.createElement("div", {
					className: ve.a.textWrapper
				}, l.a.createElement("h2", null, e.heading), l.a.createElement("p", null, e.description)))), m && l.a.createElement("div", {
					className: ve.a.error
				}, l.a.createElement("strong", {
					className: ve.a.errorLabel
				}, "Oh no!"), l.a.createElement("p", {
					className: ve.a.errorText
				}, m))), l.a.createElement("nav", {
					className: ve.a.actions
				}, v === be.Loading && l.a.createElement(d.a, {
					desc: "Label: Please Wait..."
				}, "Please wait..."), v === be.Supported && f.map((e, t) => l.a.createElement(D, {
					key: t,
					onClick: t => h(e, t),
					className: n()(ve.a.connectBtn, "coinbase" === e ? ve.a.connectCoinbaseBtn : null)
				}, l.a.createElement(d.a, {
					desc: "Label: Connect to Wallet"
				}, "Connect to", " ", "coinbase" === e ? "Coinbase" : "Metamask"))), v === be.Unsupported && l.a.createElement(d.a, {
					desc: "Label: Unsupported Wallet"
				}, "Please setup a metamask wallet to continue...")), l.a.createElement("div", {
					className: ve.a.disclaimer
				}, "You acknowledge that Reddit does not own, control, and is not affiliated with MetaMask, and Reddit expressly disclaims any responsibility or liability related to your access to or use of MetaMask. Your use of any MetaMask services will be governed by any terms of service and policies set forth by MetaMask.”"))))
			};
			var ye = a("./node_modules/@reddit/avatars.ui.preview/dist/NftPreview/NftPreview.module.less"),
				Oe = a.n(ye);
			let he;
			! function(e) {
				e[e.InAuction = 0] = "InAuction", e[e.Owned = 1] = "Owned", e[e.NotOwned = 2] = "NotOwned", e[e.InvalidNetwork = 3] = "InvalidNetwork", e[e.NotConnected = 4] = "NotConnected"
			}(he || (he = {}));
			const Ee = e => {
				let {
					nft: t
				} = e;
				const a = Object(ae.a)(c.w),
					{
						user: o
					} = Object(c.Q)(),
					n = Object(c.O)(),
					{
						saveNft: d
					} = Object(c.N)(),
					u = Object(i.wb)(),
					[m, p] = Object(r.useState)(!1),
					[v, b] = Object(r.useState)(he.InAuction),
					f = o.csrfToken;
				Object(r.useEffect)(() => {
					(async function(e, t) {
						if (!t) return he.NotConnected;
						if (await t.getAccountByAddress(e.walletAddress)) return t.activeNetwork !== e.network ? he.InvalidNetwork : he.Owned;
						return he.NotOwned
					})(t, a).then(e => {
						b(e)
					})
				}, [t, a]);
				const y = Object(r.useCallback)(async () => {
						t.accessory && n(Object(c.t)(t.accessory)), p(!0)
					}, []),
					O = Object(r.useCallback)(() => {
						p(!1)
					}, []),
					h = Object(r.useCallback)(e => {
						p(!1), Object(c.w)(e)
					}, []),
					E = Object(r.useCallback)(async () => {
						t.accessory && n(Object(c.v)(t.accessory)), window.top.location.href = t.providerUrl
					}, [t]),
					_ = Object(r.useCallback)(async () => {
						if (n(Object(c.q)("save")), !a) return;
						const e = await a.getAccountByAddress(t.walletAddress);
						if (e) {
							const a = new Date,
								o = f,
								r = Object(i.E)(t.id, a, o),
								l = await e.sign(r);
							t.accessory && n(Object(c.z)(t.accessory));
							const {
								AVATAR_SAVE_SUCCESS: m,
								SOMETHING_WRONG: p
							} = s, v = await d(t.id, l);
							u(v ? m : p)
						}
					}, [a, t]),
					g = Object(i.H)("Join the Auction", "CTA: join the avatar auction on metamask"),
					j = Object(i.H)("Connect your Crypto Wallet", "CTA: connect crypto wallet to avatar account");
				return l.a.createElement(l.a.Fragment, null, v === he.InAuction && l.a.createElement(l.a.Fragment, null, l.a.createElement("p", {
					className: Oe.a.ownershipText
				}, "This NFT is currently in auction"), l.a.createElement(V, {
					text: g,
					onClick: E
				})), v === he.Owned && l.a.createElement(l.a.Fragment, null, l.a.createElement("p", {
					className: Oe.a.ownershipText
				}, "You own this NFT!"), l.a.createElement(V, {
					onClick: _
				})), v === he.InvalidNetwork && l.a.createElement(l.a.Fragment, null, l.a.createElement("p", {
					className: Oe.a.ownershipText
				}, "Please connect to the", " ", "mainnet" === t.network ? "Mainnet" : "Rinkeby", " network to save this NFT")), v === he.NotOwned && l.a.createElement(l.a.Fragment, null, l.a.createElement("p", {
					className: Oe.a.ownershipText
				}, "You do not own this NFT.")), v === he.NotConnected && l.a.createElement(l.a.Fragment, null, l.a.createElement("p", {
					className: Oe.a.ownershipText
				}, "Connect your crypto wallet to use this Avatar"), l.a.createElement(V, {
					secondary: !0,
					text: j,
					onClick: y
				})), m && l.a.createElement(fe, {
					toggleModalIsOpen: () => p(!1),
					isOpen: m,
					onConnected: h,
					onCloseModal: O
				}))
			};
			var _e = a("./node_modules/@reddit/avatars.ui.carousel/dist/Carousel.module.less"),
				ge = a.n(_e);
			const je = e => {
					let {
						children: t,
						className: a,
						frameClassName: s,
						scrollPercentage: o = .7,
						hideButtonsOnHover: c,
						testid: i
					} = e;
					const [d, u] = Object(r.useState)(0), [m, p] = Object(r.useState)(0), v = Object(r.useRef)(null), b = Object(r.useRef)(null), f = Object(r.useCallback)(() => {
						const e = v.current,
							t = b.current;
						if (e && t) {
							const a = ke(e),
								s = ke(t),
								n = a * o,
								r = Math.floor(s / n);
							p(r);
							const l = ke(t) - ke(e),
								c = d * n,
								i = Math.min(c, l);
							t.style.transform = `translateX(-${i}px)`
						}
					}, [v, b, o, d]);
					Object(r.useEffect)(f, [v, b, d, o]),
						function(e) {
							Object(r.useLayoutEffect)(() => {
								let t = null;
								const a = () => {
									void 0 !== window && (window.cancelAnimationFrame(t), t = window.requestAnimationFrame(() => {
										e()
									}))
								};
								return window.addEventListener("resize", a), window.addEventListener("load", a), window.addEventListener("DOMContentLoaded", a), setTimeout(a, Ce), () => {
									window.removeEventListener("resize", a), window.removeEventListener("load", a), window.removeEventListener("DOMContentLoaded", a)
								}
							}, [])
						}(f);
					const y = Object(r.useCallback)(() => {
							u(e => Math.min(e + 1, m))
						}, [m]),
						O = Object(r.useCallback)(() => {
							u(e => Math.max(0, e - 1))
						}, []),
						h = `${i}:controls`,
						E = `${h}:back`,
						_ = `${h}:forward`;
					return l.a.createElement("div", {
						"data-testid": h,
						ref: v,
						className: n()(ge.a.container, a, c ? ge.a.hideButtonsOnHover : "")
					}, d > 0 && l.a.createElement("button", {
						className: n()(ge.a.button, ge.a.previousButton),
						onClick: O,
						"data-testid": E
					}, "previous"), l.a.createElement("div", {
						className: n()(ge.a.frame, s),
						ref: b
					}, t), d < m && l.a.createElement("button", {
						className: n()(ge.a.button),
						onClick: y,
						"data-testid": _
					}, "next"))
				},
				Ce = 1e3;

			function ke(e) {
				return e.getBoundingClientRect().width
			}
			var we = a("./node_modules/@reddit/avatars.ui.icon-badge/dist/IconBadge.module.less"),
				Ne = a.n(we);
			const Se = e => {
				let {
					accessory: t,
					className: a,
					capability: s,
					wrapped: o = !1
				} = e;
				const n = t && Object(i.ib)(t),
					r = (null == t ? void 0 : t.state) === i.a.CLOSET_ONLY;
				let c;
				return t && Object(i.B)([t]) ? c = se.j : (s === i.c.PREMIUM || t && t.capabilityRequired === i.c.PREMIUM || r) && (c = se.l), c || n ? l.a.createElement("div", {
					className: Object(i.F)(a, {
						[Ne.a.iconBadgeContainer]: o
					})
				}, c && l.a.createElement(c, null), n && l.a.createElement(se.k, null)) : null
			};
			var Ae = a("./node_modules/@reddit/avatars.ui.outfit-tile/dist/OutfitTile.module.less"),
				Ie = a.n(Ae);
			const Me = e => {
				let {
					title: t,
					url: a,
					capability: s,
					onClick: o,
					className: r
				} = e;
				return l.a.createElement("div", {
					className: n()(Ie.a.card, r),
					onClick: o,
					"data-testid": "runway:outfit"
				}, l.a.createElement("div", {
					className: Ie.a.imageWrapper
				}, l.a.createElement("img", {
					src: a,
					className: Ie.a.outfitImage,
					alt: Object(d.b)("Featured Runway Outfit", `Runway Outfit: ${t}`)
				}), l.a.createElement("div", {
					className: Ie.a.capabilityWrapper
				}, l.a.createElement(Se, {
					capability: s
				}))), l.a.createElement("h5", {
					className: Ie.a.cardTitle
				}, t))
			};
			var Te = a("./node_modules/@reddit/avatars.ui.runway/dist/Runway.module.less"),
				Re = a.n(Te);
			const Be = e => {
				let {
					onClickOutfit: t,
					runway: a
				} = e;
				return l.a.createElement("div", {
					className: Re.a.runwayWrapper,
					"data-testid": "runway"
				}, l.a.createElement("h3", {
					className: Re.a.runwayTitle
				}, a.title), l.a.createElement(je, {
					testid: "runway"
				}, l.a.createElement("div", {
					className: Re.a.runway
				}, a.items.map(e => l.a.createElement(Me, {
					key: e.title,
					url: e.imageUrl,
					title: e.title,
					capability: e.capabilityRequired,
					onClick: () => t(e)
				})))))
			};
			var xe = a("./node_modules/@reddit/avatars.ui.tile/dist/Tile.module.less"),
				Le = a.n(xe),
				Pe = a("./node_modules/@reddit/avatars.ui.tile/dist/ClosetButton/ClosetButton.module.less"),
				We = a.n(Pe);
			const Fe = e => {
					let {
						meta: t,
						gear: a
					} = e;
					const s = Object(c.O)(),
						{
							updateFullClosetModal: o,
							openClosetIntroModal: n,
							openClosetRemovalModal: r
						} = Object(i.ub)(),
						u = t.isActive && !Object(i.db)() && Object(i.R)() === a.id,
						m = Object(i.cb)(),
						p = a.state === i.a.CLOSET_ONLY;
					let v = null;
					return t.isInCloset && t.closetMeta.userHasClosetSubscription ? v = l.a.createElement(se.n, {
						selected: t.isActive,
						className: We.a.closetIconImage
					}) : t.isActive && (v = l.a.createElement(se.c, {
						className: We.a.closetIconImage
					})), v ? t.isActive ? l.a.createElement("button", {
						"data-tooltip": Object(d.b)("Save it for later", "Save it for later"),
						className: Object(i.F)(We.a.closetIconContainer, {
							[We.a.active]: u
						}),
						onClick: async e => {
							if (e.stopPropagation(), s(Object(c.i)(a.id, a.sectionId)), t.isInCloset) t.isActive && (p ? r([a.id]) : await t.actions.removeGearFromCloset());
							else {
								if (t.closetMeta.userClosetIsFull) return void o({
									open: !0
								});
								if (m && t.closetMeta.userHasClosetSubscription) return void t.actions.addGearToCloset();
								if (!t.closetMeta.userHasClosetSubscription || !m) return n(a), void Object(i.pb)()
							}
						}
					}, v, !t.closetMeta.userHasItemsInCloset && l.a.createElement(l.a.Fragment, null, l.a.createElement(se.m, {
						className: We.a.sparkle1
					}), l.a.createElement(se.m, {
						className: We.a.sparkle2
					}), l.a.createElement(se.m, {
						className: We.a.sparkle3
					}))) : l.a.createElement("div", {
						className: We.a.closetIconContainer
					}, v) : null
				},
				Ue = e => {
					let {
						gear: t
					} = e;
					const {
						urgency: a,
						label: s
					} = Object(i.Y)(t) || {};
					return s ? l.a.createElement("div", {
						className: Object(i.F)(Le.a.statusIndicator, {
							[Le.a.statusIndicatorUrgent]: "urgent" === a
						}),
						"data-status-text": s
					}, s) : null
				},
				He = (e, t, a) => {
					let s = Object(i.O)(e, t);
					return a && (s += ` ${e}:worn`), s
				};
			class De extends l.a.Component {
				constructor(e) {
					super(e), this.state = {
						date: new Date
					}, this.handleClick = this.handleClick.bind(this)
				}
				shouldComponentUpdate(e) {
					return e.meta.isActive !== this.props.meta.isActive || e.meta.isInCloset !== this.props.meta.isInCloset
				}
				handleClick() {
					const {
						gear: e,
						meta: t,
						onClick: a,
						sendEvent: s
					} = this.props;
					if (Object(i.gb)(a)) a(e);
					else {
						if (Object(i.gb)(s) && s(t.actions.clickEvent()), this.props.meta.closetMeta.showClosetButton) {
							const t = Object(i.R)();
							t ? t !== e.id && Object(i.eb)() : Object(i.qb)(e.id)
						}
						Object(i.B)(t.wornAccessories) && t.actions.resetAvatar(), t.isActive ? t.actions.removeGear() : t.actions.addGear()
					}
				}
				render() {
					const {
						gear: e,
						className: t,
						meta: a,
						renderOnly: s
					} = this.props, {
						isActive: o,
						assets: n
					} = a, r = He("menu:accessory", e.id, o);
					return l.a.createElement(l.a.Fragment, null, l.a.createElement("div", {
						key: e.id,
						className: Object(i.F)(Le.a.accessoryWrapper, {
							[Le.a.nftWrapper]: a.isNft
						}, t),
						onClick: this.handleClick
					}, l.a.createElement("div", {
						"data-testid": r,
						className: Object(i.F)(Le.a.accessory, {
							[Le.a.active]: o,
							[Le.a.selected]: o
						})
					}, l.a.createElement(v, {
						id: e.id,
						assets: n,
						forceBodyColor: i.e.body.fill
					}), l.a.createElement(Se, {
						accessory: e,
						className: Le.a.iconBadgeContainer,
						wrapped: !0
					}), a.closetMeta.showClosetButton && !s && l.a.createElement(Fe, {
						meta: a,
						gear: e
					}), l.a.createElement(Ue, {
						gear: e
					}))))
				}
			}
			var ze = a("./node_modules/lodash/lodash.js");
			const Qe = () => {
				const {
					defaultAccessories: e
				} = Object(c.D)(), {
					addItemsToCloset: t,
					liveCloset: a,
					removeItemsFromCloset: s
				} = Object(c.I)(), {
					user: o
				} = Object(c.Q)(), {
					liveAvatar: n,
					addAccessories: l,
					removeAccessory: d,
					resetAvatar: u,
					setAvatar: m
				} = Object(c.G)(), {
					wornAccessories: p
				} = n(), v = Object(r.useMemo)(() => Object(ze.keyBy)(p, "id"), [p]), b = a();
				return a => {
					const n = Object(i.N)(a),
						r = n ? v && a.accessoryIds.every(e => v.hasOwnProperty(e)) : v && v.hasOwnProperty(a.id),
						f = n ? a.accessoryIds : [a.id],
						y = a.state === i.a.CLOSET_ONLY,
						O = b.accessories.hasOwnProperty(a.id),
						h = !!b.occupiedSlots,
						E = {
							userClosetIsFull: !!b.occupiedSlots && b.occupiedSlots === b.maxSlots,
							userHasClosetSubscription: o && o.hasActiveClosetSubscription,
							userHasItemsInCloset: h,
							showClosetButton: a.availableForCloset || O && y
						},
						_ = a.tags.includes("nft");
					return {
						isNft: _,
						isActive: r,
						isInCloset: O,
						accessoryIds: f,
						closetMeta: E,
						actions: {
							clickEvent: () => {
								_ ? Object(c.l)(a) : Object(c.p)(a, a.sectionId)
							},
							addGear: () => _ ? m([a], {}) : l([a]),
							addGearToCloset: () => t([a]),
							removeGear: () => d(a),
							removeGearFromCloset: async () => {
								await s(f)
							},
							resetAvatar: () => u()
						},
						assets: (() => {
							const t = n ? Object(ze.flatten)(a.accessories.map(e => e.assets)) : [...a.assets];
							return Object(i.Q)(e, a).forEach(e => t.push(...e.assets)), t
						})(),
						wornAccessories: p
					}
				}
			};
			var Ge = a("./node_modules/@reddit/avatars.ui.outfit/dist/Outfit.module.less"),
				Ve = a.n(Ge);
			const Ye = e => {
				let {
					onClick: t,
					outfit: {
						accessoryIds: a,
						title: s
					}
				} = e;
				const {
					catalog: {
						accessories: o
					}
				} = Object(c.E)(), n = Qe(), i = Object(r.useMemo)(() => o.filter(e => a.includes(e.id)), [o, a]);
				return l.a.createElement("div", {
					className: Ve.a.detailsWrapper,
					"data-testid": "outfit"
				}, l.a.createElement("div", {
					className: Ve.a.detailsHeader
				}, l.a.createElement("div", {
					className: Ve.a.detailsBack,
					onClick: t
				}, l.a.createElement(se.a, {
					className: Ve.a.backButton
				})), l.a.createElement("h3", {
					className: Ve.a.detailsTitle
				}, s)), i && l.a.createElement("div", {
					className: Ve.a.detailsAccesoriesWrapper
				}, l.a.createElement("div", {
					className: Ve.a.detailsAccesories
				}, i.map(e => {
					const t = n(e);
					return l.a.createElement(De, {
						meta: t,
						key: e.id,
						className: Ve.a.item,
						gear: e
					})
				}))))
			};
			var qe = a("./node_modules/@reddit/avatars.ui.editor-category/dist/Featured/FeaturedCategory.module.less"),
				Ke = a.n(qe);
			const Xe = e => {
				let {
					restoreScroll: t,
					saveAndResetScroll: a
				} = e;
				const [s, o] = Object(r.useState)(null), {
					catalog: {
						runways: i
					}
				} = Object(c.E)(), [d, u] = Object(r.useState)(!1), m = Object(c.O)(), p = () => {
					d ? t() : a(), u(!d)
				}, v = e => {
					o(e), m(Object(c.n)(e)), p()
				};
				return l.a.createElement("div", {
					className: Ke.a.featuredWrapper,
					"data-testid": "menu:featured"
				}, l.a.createElement("div", {
					className: n()(Ke.a.runwaysContainer, {
						[Ke.a.shifted]: d
					})
				}, l.a.createElement("div", {
					className: Ke.a.spacing
				}, i.map((e, t) => l.a.createElement(Be, {
					key: `carousel-${t}`,
					runway: e,
					onClickOutfit: v
				})))), l.a.createElement("div", {
					className: n()(Ke.a.detailsContainer, {
						[Ke.a.shifted]: d
					})
				}, l.a.createElement("div", {
					className: Ke.a.spacing
				}, s && l.a.createElement(Ye, {
					outfit: s,
					onClick: p
				}))))
			};
			var Je = a("./node_modules/lodash/debounce.js"),
				Ze = a.n(Je),
				$e = a("./node_modules/lodash/uniq.js"),
				et = a.n($e),
				tt = a("./node_modules/@reddit/avatars.ui.color-picker/dist/ColorPicker.module.less"),
				at = a.n(tt);
			const st = e => {
				let {
					gear: t,
					persistentColorClass: a
				} = e;
				const {
					updateColors: s,
					getAvatar: o
				} = Object(c.G)(), {
					wornAccessories: d,
					styles: u
				} = o(), m = t.map(e => e.id), p = d.filter(e => m.includes(e.id)), v = e => {
					const t = e.filter(e => {
						var t;
						return null === (t = e.customizableClasses) || void 0 === t ? void 0 : t.length
					}).reduce((e, t) => [...e, ...t.customizableClasses], []).filter(e => !Object.values(i.t).includes(e));
					return a && t.push(a), et()(t)
				}, [, b] = Object(r.useState)([]);
				v(p).forEach((e, t) => {
					b[t] = {
						current: null
					}
				});
				const f = (e, t) => {
						s({
							[e]: {
								fill: t
							}
						})
					},
					y = Object(r.useCallback)(Ze()(f, 150, {
						leading: !0
					}), [f]);
				return t.length || a ? l.a.createElement("div", {
					className: at.a.wrapper,
					"data-testid": "menu:colors"
				}, v(p).map((e, t) => {
					var a;
					const s = i.b[e] || i.b.default,
						o = b[t],
						r = (null === (a = u[e]) || void 0 === a ? void 0 : a.fill) || s[0],
						c = o.current ? o.current.value : r,
						d = !s.includes(r);
					return l.a.createElement("div", {
						className: at.a.oneClass,
						key: e
					}, l.a.createElement("div", {
						className: at.a.colorSamples
					}, s.map(t => {
						const a = e in u && r === t;
						return l.a.createElement("div", {
							"data-testid": "menu:colors:option",
							className: n()(at.a.oneColor, {
								[at.a.active]: a
							}),
							key: at.a.className + t,
							style: {
								backgroundColor: t
							},
							onClick: () => f(e, t)
						})
					}), l.a.createElement("div", {
						className: n()(at.a.oneColor, at.a.colorWheel, {
							[at.a.active]: d
						}),
						"data-testid": "menu:colors:custom",
						onClick: t => {
							if (t.stopPropagation(), !d) {
								const t = o.current ? o.current.value : c;
								f(e, t)
							}
						}
					}, l.a.createElement("input", {
						ref: b[t],
						value: c,
						type: "color",
						onChange: t => {
							const a = r,
								s = t.target.value;
							a !== s && y(e, s)
						}
					}))))
				})) : null
			};
			var ot = a("./node_modules/@reddit/avatars.ui.accessory-grid/dist/AccessoryGrid.module.less"),
				nt = a.n(ot);
			const rt = l.a.memo(e => {
				let {
					className: t,
					gear: a,
					tilesOnly: s = !1,
					persistentColorClass: o
				} = e;
				const n = Qe(),
					r = Object(c.O)();
				return l.a.createElement("div", {
					"data-testid": "menu:section",
					className: t
				}, l.a.createElement("div", {
					className: nt.a.list
				}, !s && l.a.createElement(st, {
					gear: a,
					persistentColorClass: o
				}), l.a.createElement("div", {
					className: nt.a.items
				}, a.map(e => l.a.createElement(De, {
					key: e.id,
					gear: e,
					className: nt.a.item,
					meta: n(e),
					sendEvent: r
				})))))
			});
			var lt = a("./node_modules/@reddit/avatars.ui.style-card/dist/StyleCard.module.less"),
				ct = a.n(lt);
			const it = e => {
				let {
					name: t,
					imageUrl: a,
					color: s,
					handleClick: o
				} = e;
				return l.a.createElement("div", {
					className: n()(ct.a.styleCardWrapper, ct.a[`card-${s}`]),
					onClick: () => o(t)
				}, l.a.createElement("img", {
					src: a,
					alt: t,
					className: ct.a.styleCardImage
				}), l.a.createElement("div", {
					className: ct.a.cardName
				}, `${t}`.replace(/' '/g, "\n")))
			};
			var dt = a("./node_modules/@reddit/avatars.ui.sheet/dist/Sheet.module.less"),
				ut = a.n(dt);
			const mt = e => {
				let {
					active: t,
					children: a,
					title: s,
					onClickBack: o
				} = e;
				return l.a.createElement("div", {
					className: n()(ut.a.sheetWrapper, {
						[ut.a.active]: t
					})
				}, l.a.createElement("div", {
					className: ut.a.sheetHeader
				}, l.a.createElement("div", {
					className: ut.a.sheetBack,
					onClick: () => {
						Object(i.gb)(o) && o()
					}
				}, l.a.createElement(se.a, {
					className: ut.a.backButton
				})), l.a.createElement("div", {
					className: ut.a.title
				}, s)), l.a.createElement("div", {
					className: ut.a.sheetBody
				}, a))
			};
			var pt = a("./node_modules/@reddit/avatars.ui.style-tab/dist/StyleTab.module.less"),
				vt = a.n(pt);

			function bt() {
				return (bt = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var a = arguments[t];
						for (var s in a) Object.prototype.hasOwnProperty.call(a, s) && (e[s] = a[s])
					}
					return e
				}).apply(this, arguments)
			}
			const ft = {
					hats: "green",
					tops: "purple",
					bottoms: "red",
					face: "blue",
					"left hand": "orange",
					"right hand": "periwinkle",
					"full outfits": "blue"
				},
				yt = e => {
					let {
						activeStyleCard: t,
						tileGroups: a,
						selectStyleCard: s
					} = e;
					const o = Object(r.useMemo)(() => Object.values(i.v).map(e => ({
							name: e,
							imageUrl: "https://i.redd.it/snoovatar/avatars/0809857f-aeb1-46c8-8898-a7cdc2aeac6a.png",
							color: ft[e]
						})), []),
						n = e => {
							s(e)
						};
					return l.a.createElement("div", {
						className: vt.a.styleTabWrapper
					}, l.a.createElement(l.a.Suspense, {
						fallback: l.a.createElement("div", null, "Loading...")
					}, o.map(e => l.a.createElement(it, bt({
						key: e.name,
						handleClick: n
					}, e))), l.a.createElement(mt, {
						onClickBack: () => {
							s(null)
						},
						title: t || "",
						active: null !== t
					}, t && l.a.createElement(rt, {
						gear: a[t]
					}))))
				};
			var Ot = a("./node_modules/@reddit/avatars.ui.me-card/dist/MeCard.module.less"),
				ht = a.n(Ot);
			const Et = e => {
				let {
					name: t,
					assets: a,
					handleClick: s
				} = e;
				return l.a.createElement("div", {
					className: ht.a.meCardWrapper,
					onClick: () => s(t)
				}, l.a.createElement(v, {
					assets: a || [],
					className: ht.a.assetPreview
				}), l.a.createElement("div", {
					className: ht.a.cardName
				}, t))
			};
			var _t = a("./node_modules/@reddit/avatars.ui.past-avatars/dist/PastAvatars.module.less"),
				gt = a.n(_t),
				jt = a("./node_modules/@reddit/avatars.ui.past-avatars/dist/empty-snoo.svg"),
				Ct = a.n(jt),
				kt = a("./node_modules/@reddit/avatars.ui.past-avatars-upsell-modal/dist/PastAvatarsUpsellModal.module.less"),
				wt = a.n(kt);
			const Nt = e => {
					let {
						isOpen: t,
						closeModal: a,
						src: s
					} = e;
					const o = Object(r.useCallback)(e => {
						e.preventDefault(), e.stopPropagation(), Object(i.G)()
					}, []);
					return l.a.createElement(ie, {
						isOpen: t,
						toggleModalIsOpen: a,
						className: wt.a.pastAvatarsUpsellModalWrapper
					}, l.a.createElement("button", {
						className: wt.a.closeBtn,
						onClick: a
					}, l.a.createElement("img", {
						src: ue.a,
						alt: Object(d.b)("Close Icon", "Close Icon"),
						className: wt.a.closeBtnImage
					})), l.a.createElement("div", {
						className: wt.a.contentWrapper
					}, l.a.createElement("img", {
						className: wt.a.pastAvatarImage,
						src: s,
						alt: Object(d.b)("Past Avatar Outfit", "Past Avatar Outfit")
					}), l.a.createElement("h1", {
						className: wt.a.header
					}, l.a.createElement(d.a, {
						desc: "Label: Unlock with Premium"
					}, "Unlock with Premium")), l.a.createElement("p", {
						className: wt.a.secondaryText
					}, l.a.createElement(d.a, {
						desc: "description text for past avatars"
					}, "Access all your past outfits and even bring back expired ones!"))), l.a.createElement("div", {
						className: wt.a.footer
					}, l.a.createElement(D, {
						className: wt.a.backBtn,
						onClick: a
					}, l.a.createElement(d.a, {
						desc: "Label: Back"
					}, "Go Back")), l.a.createElement(D, {
						className: wt.a.premiumBtn,
						onClick: o
					}, l.a.createElement(d.a, {
						desc: "Label: Get Premium"
					}, "Get Premium"))))
				},
				St = () => {
					const [e, t] = Object(r.useState)(""), [a, s] = Object(r.useState)(!1), {
						catalog: {
							pastAvatars: o
						}
					} = Object(c.E)(), {
						setAvatar: n
					} = Object(c.G)(), {
						user: u
					} = Object(c.Q)(), m = e => {
						if (!u.hasActiveClosetSubscription) return t((null == e ? void 0 : e.imageUrl) || Ct.a), void s(!0);
						e && n(e.accessories, e.styles)
					};
					return l.a.createElement("div", {
						className: gt.a.wrapper
					}, l.a.createElement("h1", {
						className: gt.a.sectionTitle
					}, l.a.createElement(d.a, {
						desc: "User's past avatars"
					}, "Past looks")), l.a.createElement("p", {
						className: gt.a.sectionDescription
					}, l.a.createElement(d.a, {
						desc: "Secondary carousel heading for past avatars"
					}, "Revisit one of your looks")), l.a.createElement(je, {
						testid: "past-avatars"
					}, l.a.createElement("div", {
						className: gt.a.pastAvatars
					}, (() => {
						const e = [];
						for (let t = 0; t < 30; t++) {
							const a = o[t];
							a ? e.push(l.a.createElement(Me, {
								className: gt.a.outfitTile,
								title: "",
								url: a.imageUrl,
								capability: i.c.PREMIUM,
								onClick: () => m(a)
							})) : e.push(l.a.createElement(Me, {
								className: gt.a.emptyOutfitTile,
								title: "",
								url: Ct.a,
								capability: i.c.PREMIUM,
								onClick: () => m()
							}))
						}
						return e
					})())), a && l.a.createElement(Nt, {
						src: e,
						isOpen: a,
						closeModal: () => s(!1)
					}))
				};
			var At = a("./node_modules/@reddit/avatars.ui.me-tab/dist/MeTab.module.less"),
				It = a.n(At);

			function Mt() {
				return (Mt = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var a = arguments[t];
						for (var s in a) Object.prototype.hasOwnProperty.call(a, s) && (e[s] = a[s])
					}
					return e
				}).apply(this, arguments)
			}
			const Tt = (e, t, a) => {
					const s = t.find(e => e.sectionTag === a) || e.find(e => e.sectionTag === a),
						o = e.filter(e => e.sectionTag && ["expression", "tops"].includes(e.sectionTag));
					return (s ? Object(i.I)(o, [s]) : o).reduce((e, t) => {
						let {
							assets: a
						} = t;
						return [...e, ...a]
					}, [])
				},
				Rt = {
					hair: "hair",
					"facial hair": "facialhair",
					eyes: "eyes",
					body: "body"
				},
				Bt = e => {
					let {
						tileGroups: t,
						activeMeCard: a,
						selectMeCard: s
					} = e;
					const {
						liveAvatar: o
					} = Object(c.G)(), {
						wornAccessories: n
					} = o(), {
						catalog: {
							defaultAccessories: u
						}
					} = Object(c.H)(), m = Object(r.useMemo)(() => Object.values(i.l).map(e => ({
						name: e,
						assets: Tt(u, n, e)
					})), [n, u]);
					return l.a.createElement("div", {
						className: It.a.meTabWrapper
					}, l.a.createElement("div", null, l.a.createElement("h1", {
						className: It.a.sectionTitle
					}, l.a.createElement(d.a, {
						desc: "Section to customize users' appearance, such as eyes and hair"
					}, "Appearance")), l.a.createElement(l.a.Suspense, {
						fallback: l.a.createElement("div", null, "Loading...")
					}, l.a.createElement("div", {
						className: It.a.cardWrapper
					}, m.map(e => l.a.createElement(Et, Mt({
						key: e.name,
						handleClick: s
					}, e)))), l.a.createElement(mt, {
						onClickBack: () => s(null),
						title: a || "",
						active: null !== a
					}, a && l.a.createElement(rt, {
						gear: t[a],
						persistentColorClass: Rt[a]
					})))), !a && l.a.createElement(St, null))
				};
			var xt = a("./node_modules/@reddit/avatars.ui.editor-category/dist/EditorCategory.module.less"),
				Lt = a.n(xt);
			const Pt = e => {
				let {
					activeMeCard: t,
					activeStyleCard: a,
					currentTab: s,
					selectMeCard: o,
					selectStyleCard: n
				} = e;
				const d = Object(r.useRef)(null),
					[u, m] = Object(r.useState)(0),
					{
						catalog: {
							accessories: p,
							outfits: v
						}
					} = Object(c.E)(),
					b = Object(r.useMemo)(() => Object(i.bb)(p, v), [p, v]),
					f = Object(c.O)();
				Object(r.useEffect)(() => {
					s && f(Object(c.R)(s))
				}, [s]), Object(r.useEffect)(() => y(0), [s]);
				const y = Object(r.useCallback)(e => {
						var t;
						let a = e || 0;
						d.current && void 0 === e && (a = d.current.scrollTop), m(a), null === (t = d.current) || void 0 === t || t.scrollTo({
							top: 0
						})
					}, [d]),
					O = Object(r.useCallback)(() => {
						d.current && d.current.scrollTo({
							top: u
						})
					}, [d, u]);
				return l.a.createElement("div", {
					className: Lt.a.stage,
					ref: d,
					"data-testid": "menu:stage"
				}, l.a.createElement("div", {
					className: Lt.a.innerStage
				}, s === i.n.EXPLORE && l.a.createElement(Xe, {
					saveAndResetScroll: y,
					restoreScroll: O
				}), s === i.n.STYLE && l.a.createElement(yt, {
					tileGroups: b,
					activeStyleCard: a,
					selectStyleCard: n
				}), s === i.n.ME && l.a.createElement(Bt, {
					tileGroups: b,
					activeMeCard: t,
					selectMeCard: o
				})))
			};
			var Wt = a("./node_modules/@reddit/avatars.ui.editor-navigation/dist/EditorNavigation.module.less"),
				Ft = a.n(Wt);
			const Ut = [Ft.a.sparkle1, Ft.a.sparkle2, Ft.a.sparkle3, Ft.a.sparkle4],
				Ht = e => {
					let {
						className: t,
						currentTab: a,
						onSelect: s
					} = e;
					return l.a.createElement("nav", {
						className: Ft.a.editorNavigation
					}, l.a.createElement("div", {
						"data-testid": "nav",
						className: n()(Ft.a.selectorContainer, t)
					}, Object.keys(i.n).map(e => l.a.createElement("div", {
						"data-testid": `nav:category nav:category:${e}`,
						onClick: () => s(i.n[e]),
						key: e,
						className: n()(Ft.a.pillOption, {
							[Ft.a.selectedPillOption]: a === i.n[e]
						})
					}, e.toLocaleLowerCase(), e === i.n.EXPLORE && Ut.map((e, t) => l.a.createElement(se.m, {
						key: t,
						className: n()(Ft.a.sparkle, e)
					}))))))
				};
			var Dt = a("./node_modules/@reddit/avatars.ui.editor/dist/Editor.module.less"),
				zt = a.n(Dt);
			const Qt = e => {
				let {
					className: t
				} = e;
				const [a, s] = Object(r.useState)(i.n.EXPLORE), [o, c] = Object(r.useState)(null), [d, u] = Object(r.useState)(null), m = a === i.n.STYLE && o === i.v.NFTS;
				return a ? l.a.createElement("div", {
					className: n()(zt.a.container, t, m ? zt.a.nftMenu : void 0),
					"data-testid": "menu"
				}, l.a.createElement(Ht, {
					currentTab: a,
					onSelect: e => {
						e === i.n.STYLE ? c(null) : e === i.n.ME && u(null), e !== a && s(e)
					}
				}), l.a.createElement(Pt, {
					currentTab: a,
					activeStyleCard: o,
					selectStyleCard: c,
					activeMeCard: d,
					selectMeCard: u
				})) : null
			};
			var Gt = a("./node_modules/@reddit/avatars.ui.modal-wrapper/dist/WearingModal/WearingModal.module.less"),
				Vt = a.n(Gt);
			const Yt = e => {
				let {
					closeModal: t
				} = e;
				const [a, s] = Object(r.useState)(), {
					getAvatar: o
				} = Object(c.G)(), n = Object(c.O)();
				return Object(r.useEffect)(() => {
					const e = o().wornAccessories.filter(e => !Object(i.K)(e));
					s(e), n(Object(c.X)())
				}, []), a ? l.a.createElement(ie, {
					isOpen: !0,
					toggleModalIsOpen: t,
					className: Vt.a.wearingModalWrapper
				}, l.a.createElement("div", {
					className: Vt.a.wearingModal
				}, l.a.createElement("div", {
					className: Vt.a.modalTitle
				}, "Wearing", l.a.createElement("div", {
					className: Vt.a.closeButtonContainer,
					onClick: t
				}, l.a.createElement(se.b, {
					className: Vt.a.closeButton
				}))), l.a.createElement(rt, {
					tilesOnly: !0,
					gear: a
				}))) : null
			};
			var qt = a("./node_modules/@reddit/avatars.ui.modal-wrapper/dist/RemoveItemFromClosetModal/RemoveItemFromClosetModal.module.less"),
				Kt = a.n(qt);
			const Xt = e => {
				let {
					className: t,
					itemsToBeRemovedId: a,
					closeModal: s,
					goBackCallback: o
				} = e;
				const n = Object(c.O)(),
					{
						removeItemsFromCloset: r
					} = Object(c.I)(),
					u = Object(i.gb)(o) ? o : s;
				return l.a.createElement(ie, {
					className: Object(i.F)(Kt.a.removeClosetItemModalWrapper, t),
					isOpen: !0,
					toggleModalIsOpen: s
				}, l.a.createElement("div", null, l.a.createElement("div", {
					className: Kt.a.header
				}, l.a.createElement("h1", null, l.a.createElement(d.a, {
					desc: "Header: Are you sure?"
				}, "Are you sure?")), l.a.createElement("button", {
					className: Kt.a.closeBtn,
					onClick: s
				}, l.a.createElement("img", {
					src: ue.a,
					alt: Object(d.b)("Close Modal", "Close Modal icon alt text"),
					className: Kt.a.closeBtnImage
				}))), l.a.createElement("div", {
					className: Kt.a.mainContent
				}, l.a.createElement("p", null, l.a.createElement(d.a, {
					desc: "Label: Warning to permanently lose item once removed"
				}, "Once you remove this content, it is gone forever."))), l.a.createElement("div", {
					className: Kt.a.footer
				}, l.a.createElement(D, {
					className: Kt.a.backBtn,
					onClick: u
				}, l.a.createElement(d.a, {
					desc: "Label: Back"
				}, "Go Back")), l.a.createElement(D, {
					className: Kt.a.removeBtn,
					onClick: async e => {
						n(Object(c.m)(a)), await r(a), s()
					}
				}, l.a.createElement(d.a, {
					desc: "Label: Remove"
				}, "Remove")))))
			};
			var Jt = a("./node_modules/lodash/without.js"),
				Zt = a.n(Jt),
				$t = a("./node_modules/@reddit/avatars.ui.modal-wrapper/dist/ClosetFullModal/ClosetFullModalBody/styles.module.less"),
				ea = a.n($t);
			const ta = e => {
				let {
					closeModal: t,
					openConfirmRemovalFlow: a,
					initialRemovalItemIds: s,
					numOver: o
				} = e;
				const n = Qe(),
					{
						closet: u,
						removeItemsFromCloset: m
					} = Object(c.I)(),
					[p, v] = Object(r.useState)(s),
					b = !!p.length,
					f = b ? `(${p.length})` : "",
					y = Object.values(u.accessories),
					O = e => {
						const t = p.includes(e.id) ? [...Zt()(p, e.id)] : [...p, e.id];
						v(t)
					};
				return l.a.createElement("div", null, l.a.createElement("div", {
					className: ea.a.header
				}, l.a.createElement("h1", {
					className: ea.a.title
				}, l.a.createElement(d.a, {
					desc: "Heading: You're out of room."
				}, "You're out of room")), l.a.createElement("h4", {
					className: ea.a.description
				}, o ? l.a.createElement(d.a, {
					desc: "Subheading: Out of closet space on save."
				}, "Uh oh! Some of this gear has expired,", l.a.createElement("br", null), "but you're out of space in your closet.", l.a.createElement("br", null), "Remove some gear to make room for", " ", l.a.createElement(d.a, {
					name: "needed closet spaces count"
				}, o), " ", "more.") : l.a.createElement(d.a, {
					desc: "Sub-Heading: You've exceeded the size limit of your Closet."
				}, "You can only save ", u.maxSlots, " items at a time.", l.a.createElement("br", null), "Remove some gear to make room for more.")), l.a.createElement("button", {
					className: ea.a.closeBtn,
					onClick: t
				}, l.a.createElement("img", {
					src: ue.a,
					alt: "close modal",
					className: ea.a.closeBtnImage
				}))), l.a.createElement("div", {
					className: ea.a.mainContent
				}, y && l.a.createElement("div", {
					className: ea.a.detailsAccesoriesWrapper
				}, l.a.createElement("div", {
					className: ea.a.detailsAccesories
				}, Object.values(y).map(e => {
					const t = p.includes(e.id),
						a = n(e);
					return a.isActive = t, l.a.createElement(De, {
						meta: a,
						key: e.id,
						className: ea.a.item,
						gear: e,
						renderOnly: !0,
						onClick: O
					})
				})))), l.a.createElement("div", {
					className: ea.a.footer
				}, l.a.createElement(D, {
					className: ea.a.backBtn,
					onClick: t
				}, l.a.createElement(d.a, {
					desc: "Label: Back"
				}, "Go Back")), l.a.createElement(D, {
					className: Object(i.F)(ea.a.removeBtn, {
						[ea.a.disabled]: !b
					}),
					onClick: async e => {
						p.some(e => u.accessories[e].state === i.a.CLOSET_ONLY) ? a(p) : (await m(p), t())
					}
				}, l.a.createElement(d.a, {
					desc: `Label: Remove ${f} items from your closet`
				}, `Remove ${f}`))))
			};
			var aa = a("./node_modules/@reddit/avatars.ui.modal-wrapper/dist/ClosetFullModal/ClosetFullModal.module.less"),
				sa = a.n(aa);
			const oa = e => {
				let {
					closeModal: t,
					numOver: a
				} = e;
				const [s, o] = Object(r.useState)(!1), [n, i] = Object(r.useState)([]), d = Object(c.O)();
				Object(r.useEffect)(() => d(Object(c.U)({
					isExpiredSave: !!a
				})), []);
				const u = e => {
						o(!0), i(e)
					},
					m = () => o(!1);
				return s ? l.a.createElement(Xt, {
					className: sa.a.removeClosetItemModalWrapper,
					closeModal: t,
					goBackCallback: m,
					itemsToBeRemovedId: n
				}) : l.a.createElement(ie, {
					isOpen: !0,
					toggleModalIsOpen: t,
					className: sa.a.closetModalWrapper
				}, l.a.createElement(ta, {
					closeModal: t,
					openConfirmRemovalFlow: u,
					initialRemovalItemIds: n,
					numOver: a
				}))
			};
			var na = a("./node_modules/@reddit/avatars.ui.modal-wrapper/dist/ClosetIntroModal/ClosetIntroModal.module.less"),
				ra = a.n(na);
			const la = e => {
					let {
						gear: t,
						closeModal: a
					} = e;
					const s = Object(c.O)(),
						{
							addItemsToCloset: o
						} = Object(c.I)(),
						{
							user: n
						} = Object(c.Q)();
					Object(r.useEffect)(() => {
						n.hasActiveClosetSubscription ? s(Object(c.V)()) : s(Object(c.S)())
					}, [n.hasActiveClosetSubscription]);
					return l.a.createElement(ie, {
						isOpen: !0,
						toggleModalIsOpen: a,
						className: ra.a.closetModalWrapper
					}, l.a.createElement("div", {
						className: ra.a.closeModalContentWrapper
					}, l.a.createElement("button", {
						className: ra.a.closeBtn,
						onClick: a
					}, l.a.createElement("img", {
						src: ue.a,
						alt: "close modal",
						className: ra.a.closeBtnImage
					})), l.a.createElement("div", {
						className: ra.a.closetImageWrapper
					}, l.a.createElement(se.d, {
						className: ra.a.closetImage
					}), ["sparkle1", "sparkle2", "sparkle3", "sparkle4", "sparkle5", "sparkle6"].map(e => l.a.createElement(se.m, {
						key: e,
						className: ra.a[e]
					}))), l.a.createElement("p", {
						className: ra.a.secondaryTitle
					}, l.a.createElement(d.a, {
						desc: "Premium Feature"
					}, "Premium Feature")), l.a.createElement("h1", {
						className: ra.a.title
					}, l.a.createElement(d.a, {
						desc: "Closet"
					}, "Closet")), l.a.createElement("div", {
						className: ra.a.infoTextWrapper
					}, l.a.createElement("p", null, l.a.createElement(d.a, {
						desc: "Seasonal avatar gear comes and goes, but Premium subscribers can save up to 50 items to keep as long as they like."
					}, "Seasonal avatar gear comes and goes, but Premium subscribers can save up to 50 items to keep as long as they like."))), n.hasActiveClosetSubscription ? l.a.createElement(D, {
						onClick: async e => {
							t.id && (s(Object(c.k)(t.id)), await o([t])), a(e)
						},
						className: ra.a.continueBtn
					}, l.a.createElement(d.a, {
						desc: "Label: continue back to stash feature"
					}, "Continue")) : l.a.createElement(ee, {
						className: ra.a.continueBtn,
						telemetryPage: "avatar_intro_closet",
						hideSubtext: !0
					}), l.a.createElement("p", {
						className: ra.a.premiumAlert
					}, l.a.createElement(d.a, {
						desc: "Label: Only paid Reddit Premium members get a closet."
					}, "Only paid Reddit Premium members get a closet"))))
				},
				ca = e => {
					let {
						children: t
					} = e;
					const [a, s] = Object(r.useState)(i.f), o = e => s({
						...a,
						wearingOpen: e
					}), n = e => s({
						...a,
						fullCloset: {
							...a.fullCloset,
							...e
						}
					}), c = function() {
						let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [];
						return s({
							...a,
							closetRemovalConfirmation: {
								gearIds: e
							}
						})
					};
					return l.a.createElement(l.a.Fragment, null, l.a.createElement(i.m.Provider, {
						value: {
							updateWearingModal: o,
							updateFullClosetModal: n,
							openClosetIntroModal: e => s({
								...a,
								closetIntro: {
									gear: e
								}
							}),
							openClosetRemovalModal: c
						}
					}, t), a.wearingOpen && l.a.createElement(Yt, {
						closeModal: () => o(!1)
					}), a.fullCloset.open && l.a.createElement(oa, {
						numOver: a.fullCloset.numOver,
						closeModal: () => n({
							open: !1,
							numOver: 0
						})
					}), a.closetIntro.gear && l.a.createElement(la, {
						gear: a.closetIntro.gear,
						closeModal: () => s({
							...a,
							closetIntro: {
								gear: null
							}
						})
					}), 0 !== a.closetRemovalConfirmation.gearIds.length && l.a.createElement(Xt, {
						closeModal: c,
						itemsToBeRemovedId: a.closetRemovalConfirmation.gearIds
					}))
				};
			var ia = a("./node_modules/lodash/flatten.js"),
				da = a.n(ia),
				ua = a("./node_modules/@reddit/avatars.ui.try-it-on/dist/ButtonBar/ButtonBar.module.less"),
				ma = a.n(ua),
				pa = a("./node_modules/@apollo/client/node_modules/graphql-tag/lib/index.js"),
				va = a("./node_modules/@apollo/client/react/hooks/useApolloClient.js");
			const ba = e => `/snoovatars/${e}${encodeURIComponent(":byId")}`,
				fa = e => `/accounts/${e}/snoovatars/active`,
				ya = pa.a`
  query RandomAvatarFromRest($avatarId: string) {
    randomAvatar(avatarId: "random")
      @rest(type: "RandomAvatar", path: "/snoovatars/random${encodeURIComponent(":byId")}") {
      status
      accessoryIds
    }
  }
`,
				Oa = {
					kind: "Document",
					definitions: [{
						kind: "OperationDefinition",
						operation: "query",
						name: {
							kind: "Name",
							value: "SharedIdAvatarFromRest"
						},
						variableDefinitions: [{
							kind: "VariableDefinition",
							variable: {
								kind: "Variable",
								name: {
									kind: "Name",
									value: "path"
								}
							},
							type: {
								kind: "NamedType",
								name: {
									kind: "Name",
									value: "string"
								}
							},
							directives: []
						}],
						directives: [],
						selectionSet: {
							kind: "SelectionSet",
							selections: [{
								kind: "Field",
								name: {
									kind: "Name",
									value: "sharedAvatar"
								},
								arguments: [],
								directives: [{
									kind: "Directive",
									name: {
										kind: "Name",
										value: "rest"
									},
									arguments: [{
										kind: "Argument",
										name: {
											kind: "Name",
											value: "type"
										},
										value: {
											kind: "StringValue",
											value: "SharedAvatar",
											block: !1
										}
									}, {
										kind: "Argument",
										name: {
											kind: "Name",
											value: "path"
										},
										value: {
											kind: "Variable",
											name: {
												kind: "Name",
												value: "path"
											}
										}
									}]
								}],
								selectionSet: {
									kind: "SelectionSet",
									selections: [{
										kind: "Field",
										name: {
											kind: "Name",
											value: "accountId"
										},
										arguments: [],
										directives: []
									}, {
										kind: "Field",
										name: {
											kind: "Name",
											value: "id"
										},
										arguments: [],
										directives: []
									}, {
										kind: "Field",
										name: {
											kind: "Name",
											value: "imageUrl"
										},
										arguments: [],
										directives: []
									}, {
										kind: "Field",
										name: {
											kind: "Name",
											value: "accessories"
										},
										arguments: [],
										directives: []
									}, {
										kind: "Field",
										name: {
											kind: "Name",
											value: "styles"
										},
										arguments: [],
										directives: []
									}, {
										kind: "Field",
										name: {
											kind: "Name",
											value: "tags"
										},
										arguments: [],
										directives: []
									}]
								}
							}]
						}
					}],
					loc: {
						start: 0,
						end: 201,
						source: {
							body: '\n  query SharedIdAvatarFromRest($path: string) {\n    sharedAvatar @rest(type: "SharedAvatar", path: $path) {\n      accountId\n      id\n      imageUrl\n      accessories\n      styles\n      tags\n    }\n  }\n',
							name: "GraphQL request",
							locationOffset: {
								line: 1,
								column: 1
							}
						}
					}
				},
				ha = {
					kind: "Document",
					definitions: [{
						kind: "OperationDefinition",
						operation: "query",
						name: {
							kind: "Name",
							value: "SharedUserAvatarFromRest"
						},
						variableDefinitions: [{
							kind: "VariableDefinition",
							variable: {
								kind: "Variable",
								name: {
									kind: "Name",
									value: "path"
								}
							},
							type: {
								kind: "NamedType",
								name: {
									kind: "Name",
									value: "string"
								}
							},
							directives: []
						}],
						directives: [],
						selectionSet: {
							kind: "SelectionSet",
							selections: [{
								kind: "Field",
								name: {
									kind: "Name",
									value: "sharedAvatar"
								},
								arguments: [],
								directives: [{
									kind: "Directive",
									name: {
										kind: "Name",
										value: "rest"
									},
									arguments: [{
										kind: "Argument",
										name: {
											kind: "Name",
											value: "type"
										},
										value: {
											kind: "StringValue",
											value: "SharedAvatar",
											block: !1
										}
									}, {
										kind: "Argument",
										name: {
											kind: "Name",
											value: "path"
										},
										value: {
											kind: "Variable",
											name: {
												kind: "Name",
												value: "path"
											}
										}
									}]
								}],
								selectionSet: {
									kind: "SelectionSet",
									selections: [{
										kind: "Field",
										name: {
											kind: "Name",
											value: "accountId"
										},
										arguments: [],
										directives: []
									}, {
										kind: "Field",
										name: {
											kind: "Name",
											value: "id"
										},
										arguments: [],
										directives: []
									}, {
										kind: "Field",
										name: {
											kind: "Name",
											value: "imageUrl"
										},
										arguments: [],
										directives: []
									}, {
										kind: "Field",
										name: {
											kind: "Name",
											value: "accessories"
										},
										arguments: [],
										directives: []
									}, {
										kind: "Field",
										name: {
											kind: "Name",
											value: "styles"
										},
										arguments: [],
										directives: []
									}, {
										kind: "Field",
										name: {
											kind: "Name",
											value: "tags"
										},
										arguments: [],
										directives: []
									}]
								}
							}]
						}
					}],
					loc: {
						start: 0,
						end: 203,
						source: {
							body: '\n  query SharedUserAvatarFromRest($path: string) {\n    sharedAvatar @rest(type: "SharedAvatar", path: $path) {\n      accountId\n      id\n      imageUrl\n      accessories\n      styles\n      tags\n    }\n  }\n',
							name: "GraphQL request",
							locationOffset: {
								line: 1,
								column: 1
							}
						}
					}
				},
				Ea = () => {
					const e = Object(va.a)(),
						{
							catalog: {
								accessoriesByID: t
							}
						} = Object(c.H)(),
						{
							getAvatar: a
						} = Object(c.G)(),
						s = (s, o) => e.query({
							query: s,
							variables: o,
							fetchPolicy: "network-only"
						}).then(e => {
							const s = e.data.randomAvatar;
							return e.data.randomAvatar ? ((e, t, a) => ({
								accountId: "",
								id: "-1",
								imageUrl: "",
								accessories: e.map(e => t[e]).filter(e => !!e),
								styles: a,
								missingAccessories: []
							}))(s.accessoryIds, t, a().styles) : e.data.sharedAvatar ? Object(c.x)(e.data.sharedAvatar, !0) : null
						});
					return {
						getSharedAvatarById: e => "random" === e ? s(ya, {}) : s(Oa, {
							path: ba(e)
						}),
						getSharedAvatarByUser: e => s(ha, {
							path: fa(e)
						})
					}
				};
			const _a = e => {
				let {
					username: t,
					featureType: a,
					sharedAvatar: s,
					onContinue: o,
					onRandomize: r
				} = e;
				const u = Object(c.O)(),
					m = Object(i.wb)(),
					p = Object(c.M)(),
					{
						getSharedAvatarById: v
					} = Ea(),
					{
						setAvatar: b
					} = Object(c.G)(),
					{
						saveAvatar: f
					} = Object(c.N)(),
					y = function() {
						let {
							outfitOnly: e
						} = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
						return () => {
							if (!s) return;
							const {
								accessories: t,
								styles: a,
								accountId: n,
								missingAccessories: r
							} = s;
							u(Object(c.r)(e ? "just_outfit" : "everything", n)), p(t, a, {
								activeUserAttribution: !0,
								outfitOnly: !!e
							}), r.length && (m(i.A), u(Object(c.T)(r, n))), u(Object(c.W)("snoovatar_builder", n)), o()
						}
					},
					O = a === i.z.AVATAR_QUICK_CREATE ? async () => {
						const {
							accessories: e,
							styles: t
						} = s, a = e.map(e => {
							let {
								id: t
							} = e;
							return t
						});
						await f(a, t, {
							[i.w.SET]: !0,
							[i.w.SOURCE]: "quick_create"
						}) && (b(s.accessories, s.styles), m(i.s), o())
					}: y(), h = a === i.z.AVATAR_QUICK_CREATE ? async () => {
						const e = await v("random");
						e && r(e)
					}: y({
						outfitOnly: !0
					}), {
						buttonBarHeaderText: E,
						primaryButtonText: _,
						secondaryButtonText: g
					} = function(e, t) {
						return e === i.z.AVATAR_QUICK_CREATE && t ? {
							buttonBarHeaderText: Object(d.b)(`Hi ${d.b.param("username",t)} - meet your new avatar!`, "Quick Create New Avatar"),
							primaryButtonText: Object(d.b)("Save", "Button: Save Quick Create Avatar"),
							secondaryButtonText: Object(d.b)("Randomize", "Button: Randomize Quick Create Avatar")
						} : {
							buttonBarHeaderText: Object(d.b)("Try this look!", "CTA: Share/copy look prescreen"),
							primaryButtonText: Object(d.b)("Try on Everything", "Button: try on entire shared avatar"),
							secondaryButtonText: Object(d.b)("Just the Outfit", "Button: try on shared avatar outfit")
						}
					}(a, t);
				return l.a.createElement("div", {
					className: ma.a.buttonBar
				}, l.a.createElement("div", null, l.a.createElement("h2", null, E), l.a.createElement("p", {
					className: ma.a.legalText
				}, l.a.createElement(d.a, {
					desc: "Legal Text: Avatars are copyrighted"
				}, "Avatars and avatar visual elements © Reddit."), " ", l.a.createElement("a", {
					href: "https://reddit.zendesk.com/hc/en-us/articles/360050641932",
					target: "_blank",
					rel: "noopener noreferrer"
				}, l.a.createElement(d.a, {
					desc: "Link to learn more about Reddit copyrights."
				}, "Learn more")))), l.a.createElement("div", null, l.a.createElement("button", {
					className: n()(ma.a.tryItOnButton, ma.a.tryItOnButtonSecondary),
					onClick: h
				}, g), l.a.createElement("button", {
					className: n()(ma.a.tryItOnButton),
					onClick: O
				}, _)))
			};
			var ga = a("./node_modules/@reddit/avatars.ui.try-it-on/dist/TryItOn.module.less"),
				ja = a.n(ga),
				Ca = a("./node_modules/@apollo/client/react/hooks/useQuery.js");
			class AvatarLookupError extends Error {
				constructor() {
					var e, t, a;
					super(...arguments), a = "AvatarLookupError", (t = "name") in (e = this) ? Object.defineProperty(e, t, {
						value: a,
						enumerable: !0,
						configurable: !0,
						writable: !0
					}) : e[t] = a
				}
			}
			const ka = () => {
					const {
						getSharedAvatarById: e,
						getSharedAvatarByUser: t
					} = Ea(), {
						avatarId: a,
						username: s,
						isShareLink: o,
						featureType: n
					} = Object(i.Z)(), {
						refetch: r
					} = Object(Ca.a)(pa.a`
      ${c.b}
    `, {
						variables: {
							name: s
						},
						skip: !0
					}), l = n === i.z.AVATAR_QUICK_CREATE;
					return o || l ? a ? async () => {
						const t = await e(a);
						if (t) return t;
						throw new AvatarLookupError
					}: async () => {
						var e;
						const a = await r({
							name: s
						});
						if (null !== (e = a.data.redditorInfoByName) && void 0 !== e && e.id) {
							const e = await t(a.data.redditorInfoByName.id);
							if (e) return e
						}
						throw new AvatarLookupError
					}: () => {
						throw new AvatarLookupError
					}
				},
				wa = e => {
					let {
						onContinue: t
					} = e;
					const {
						username: a,
						featureType: s
					} = Object(i.Z)(), [o, n] = Object(r.useState)(null), u = ka(), m = Object(i.wb)(), p = Object(c.O)();
					Object(r.useEffect)(() => {
						u().then(e => {
							n(e), p(Object(c.W)("try_this_look", e.accountId))
						}).catch(() => {
							m(i.u), t()
						})
					}, []);
					const b = Object(r.useRef)(null);
					return Object(r.useEffect)(() => {
						const e = b.current;
						e && o && Object.entries(o.styles).forEach(t => {
							let [a, {
								fill: s
							}] = t;
							return Object(i.rb)(e, a, s)
						})
					}, [b, o]), o ? l.a.createElement("div", {
						className: ja.a.tryItOnWrapper
					}, l.a.createElement("div", {
						className: ja.a.previewContainer
					}, l.a.createElement("div", {
						className: ja.a.imagePreview,
						ref: b
					}, l.a.createElement(v, {
						assets: da()([...o.accessories, ...o.missingAccessories].map(e => e.assets))
					})), s === i.z.SHARE && l.a.createElement("a", {
						href: "https://www.reddit.com/u/" + a,
						target: "_blank",
						className: ja.a.creatorAttribution
					}, l.a.createElement(d.a, {
						desc: "Label: Shared avatar creator attribution"
					}, "By ", l.a.createElement(d.a, {
						name: "username"
					}, `u/${a}`)))), l.a.createElement(_a, {
						username: a,
						featureType: s,
						onContinue: t,
						sharedAvatar: o,
						onRandomize: n
					})) : l.a.createElement(w.a, null)
				};
			var Na = a("./node_modules/@reddit/avatars.templates.builder/dist/Builder.module.less"),
				Sa = a.n(Na);
			var Aa = {
				SOMETHING_WRONG: {
					text: Object(i.H)("Something went wrong", "Notification, error message: generic error message presented in a notification,"),
					kind: i.y.Error
				},
				CLOSET_ONLY_AVATAR_ADJUSTED: {
					text: Object(i.H)("Some accessories from your look are no longer available - please save to update.", "Notification, error message: avatar contains closet only accessories, add all Clost Only accesories to your closet before saving."),
					kind: i.y.Info
				},
				CLOSET_ONLY_INVALID_AVATAR: {
					text: Object(i.H)("Oops! Some accessories from your look are no longer available.", "Notification, error message: avatar contains closet only accessories, add all Clost Only accesories to your closet before saving."),
					kind: i.y.Error
				},
				RENDER_FAIL: {
					text: Object(i.H)("Snoovatar render failed. Click on image to retry", "Notification, error message: snoovatar render fail"),
					kind: i.y.Error
				},
				AVATAR_SAVE_SUCCESS: {
					text: Object(i.H)("Avatar successfully saved!", "Notification, success message: avatar save has succeeded"),
					kind: i.y.Success
				},
				COMMUNITY_SPACES_SAVE: {
					text: Object(i.H)("Awesome! Avatar successfully savd & you’re on the waitlist for Community Spaces - we’ll let you know as soon as we launch.", "Notification, success: avatar saved within community spaces entrypoint"),
					kind: i.y.Success
				}
			};
			const Ia = () => {
				const [e, t] = Object(r.useState)(!1), {
					catalog: a,
					user: s
				} = Object(c.E)();
				(e => {
					const [t, a] = Object(r.useState)(null), s = Object(i.wb)(), o = Object(p.b)(), n = Object(r.useRef)(null);
					Object(r.useEffect)(() => {
						d()
					}, [e]), Object(r.useEffect)(() => {
						if (!Object(ze.isNil)(t)) {
							const e = document.createElement("textarea");
							e.value = t, document.body.appendChild(e), e.select(), document.execCommand("copy"), document.body.removeChild(e)
						}
					}, [t]);
					const l = e => {
							const t = JSON.parse(e.data);
							t.snoovatar && !t.error ? t.share_link && a(t.share_link) : s(Aa.RENDER_FAIL)
						},
						c = () => {
							n.current = null, setTimeout(() => d(), 1e3)
						},
						d = () => {
							e && e.websocketsUrls && e.websocketsUrls.renderer && !o.MOCKING_ENABLED && !n.current && (n.current = new WebSocket(e.websocketsUrls.renderer), n.current.onmessage = l, n.current.onclose = c)
						}
				})(s);
				const o = Object(c.O)(),
					d = Object(i.wb)(),
					{
						getAvatar: u
					} = Object(c.G)(),
					{
						styles: m
					} = u(),
					v = Object(c.M)(),
					{
						isShareLink: b,
						featureType: f
					} = Object(i.Z)(),
					y = ka(),
					O = f === i.z.AVATAR_QUICK_CREATE;
				return Object(r.useEffect)(() => {
					const e = s.snoovatar || i.h;
					let t = e.accessories;
					const o = Object(i.hb)() ? Object(i.T)() : Object(i.S)(e.tags),
						n = o ? Object(i.P)(a.nfts, o) : null;
					n && (t = [n]), v(t, e.styles)
				}, []), Object(r.useEffect)(() => {
					!b && !O || null != s && s.snoovatar || y().then(e => {
						v(e.accessories, e.styles, {
							activeUserAttribution: !0
						}), o(Object(c.W)("snoovatar_builder", e.accountId))
					}).catch(() => d(i.u)).finally(() => t(!0))
				}, [b, O, s]), Object(r.useEffect)(() => Object(i.sb)(m), [m]), (b || O) && null != s && s.snoovatar && !e ? l.a.createElement(wa, {
					onContinue: () => t(!0)
				}) : l.a.createElement("div", {
					className: Sa.a.wrapper,
					"data-testid": "app"
				}, l.a.createElement(ca, null, l.a.createElement(Qt, {
					className: n()(Sa.a.menu)
				}), l.a.createElement(te, {
					categories: a.categories,
					nfts: a.nfts
				})))
			}
		},
		"./node_modules/@reddit/avatars.ui.accessory-grid/dist/AccessoryGrid.module.less": function(e, t, a) {
			e.exports = {
				heading: "_3xeZV6Lt4GLJwEhDwLjTOR",
				list: "_2iykA6sltgRgvxdzyR5bMC",
				items: "_1IjJsLzUI3JzaXueQ3uFki",
				item: "UjK3oWLtj71sBIlFfAt1D",
				clear: "_2BdRrZjF9pePElNYhVsOKz"
			}
		},
		"./node_modules/@reddit/avatars.ui.actions-menu/dist/ActionsMenu.module.less": function(e, t, a) {
			e.exports = {
				container: "_3os463OFRX9sA0l0c_RsrC",
				action: "_1pPDir73KDlsBPdi9wcA5f",
				disabled: "_1-cYL4wrZ6shqmhAp7-wK-",
				share: "_3QDgKKwWITd10MoWnUoEvs",
				undo: "_3txAnazJObpc9eITxdg1cC",
				redo: "M1RJDgB9Aka51HGOPgkCI",
				randomize: "_1Q_BKmFCviwzdExz0ogiXH"
			}
		},
		"./node_modules/@reddit/avatars.ui.actions-menu/dist/ShareFlyout/ShareFlyout.module.less": function(e, t, a) {
			e.exports = {
				flyout: "_1KI_8VzCLlthxd0SPBPhjn",
				actionLink: "_3ktkfFa3IPkrqf8CwPi9rF",
				active: "_1Yd3xbrvVs9ahyWqEWH15q",
				actionIcon: "_1D5KACEW0NuWkpIGK8On0P",
				actionText: "_2DXGrxjv37_muJc9HFBfV1",
				copyIcon: "_2QeT5CthT7JwdbLuztsYkM",
				downloadIcon: "_1NU8YyyXt0xUXEz2Uy0hLy",
				flyoutDescription: "_1G9RUgWrkwmAymCm6mVcB3"
			}
		},
		"./node_modules/@reddit/avatars.ui.button/dist/Button.module.less": function(e, t, a) {
			e.exports = {
				button: "ROUYkkz4OdkxSslS7p4e-"
			}
		},
		"./node_modules/@reddit/avatars.ui.carousel/dist/Carousel.module.less": function(e, t, a) {
			e.exports = {
				container: "_2eL3bEw0h0ISPHHA3rXOKq",
				frame: "_3Z6stO73L9lhUFr1NFS8dk",
				button: "_1tthPIrJThYFkvXeVS8okR",
				carouselButtonIcon: "_2aievyYmJzMXST5e8TZV9F",
				previousButton: "_3CTUzsG6nNQCO_095eprtQ",
				hideButtonsOnHover: "_30Ntwu_oN3OufcTVgVhTIf"
			}
		},
		"./node_modules/@reddit/avatars.ui.color-picker/dist/ColorPicker.module.less": function(e, t, a) {
			e.exports = {
				wrapper: "_3kX73hqB31uEgaBERXsIBM",
				oneClass: "_1zhILFgzHljDUxPnDHkzuA",
				className: "uaNOXmRFiL-9FpdkvrY5I",
				colorSamples: "_2PzvOY-ZlP_NwKjAaycNHE",
				oneColor: "_3YU032FMR_Uno68HkZ_VHD",
				active: "_3VIJzQKMDgJj-jnYE_HGXx",
				colorWheel: "ulq7rM3ERrS59XMV4KnPi"
			}
		},
		"./node_modules/@reddit/avatars.ui.crypto-wallet-modal/dist/CryptoWalletModal.module.less": function(e, t, a) {
			e.exports = {
				modalWrapper: "eaT5MvB6lrDvNK_LUH9Jc",
				contentWrapper: "_18aQKgVR_0r7IdOvNwKqW7",
				mainContent: "_3VHNPfzEnyDYb-u_waF7um",
				isLoading: "_1rQDynG67peCWYBDpgqs8Q",
				loadingOverlay: "_67TXghhbayftUdMcH2J4X",
				infoRow: "_2LXJWYoyJ3XOBhJUsCL5FT",
				icon: "_1oK1xp4AiE9cLT0X0rAqoc",
				textWrapper: "_272iISAhNFhH5INwGPmbP9",
				header: "_2weZ7BJ5YaGl0JzEHi7J6H",
				closeBtn: "_2FQ30Ina2655MeOyQOFkQN",
				closeBtnIcon: "_1BbLNu-6yTWI3Y48u8BpN7",
				connectBtn: "SWyF43zscWUCMcaYD2Ov9",
				connectCoinbaseBtn: "_2Cll3OH9Hz8T36fNIksXM_",
				actions: "_1kJ4MNw68i5ZhMPbrK_Oi6",
				error: "_4l2rizjsURjBPju_HPemW",
				errorLabel: "P2U8NQS5mDk0RtwmUrR-4",
				errorText: "Y2Qp659CzcbWwEsMQW3Hp",
				disclaimer: "_2vMv89KEzxiC8lrS_Kh66O"
			}
		},
		"./node_modules/@reddit/avatars.ui.cta-button/dist/CTAButton.module.less": function(e, t, a) {
			e.exports = {
				ctaButton: "_30X-sGTL2pvouxh1-oHNZS",
				small: "_2dI_Qhuh0mNBXgc7RX7w8i",
				secondary: "_3QFKmF2n0GyJabzMsRIOjM",
				subText: "_3ezUE-GvARM0L1J2OW7Xzg"
			}
		},
		"./node_modules/@reddit/avatars.ui.editor-category/dist/EditorCategory.module.less": function(e, t, a) {
			e.exports = {
				stage: "zmyahKV6gadPmZGhRmNwu",
				innerStage: "Lvo_3LpeUUsqz01C7h9la"
			}
		},
		"./node_modules/@reddit/avatars.ui.editor-category/dist/Featured/FeaturedCategory.module.less": function(e, t, a) {
			e.exports = {
				featuredWrapper: "_1fJur-QP-mGq6rQZ-Afvld",
				container: "_3WKruSomytoBzBzipJwVBR",
				detailsContainer: "_22f4BuOQB7SwCah5AwJYi",
				runwaysContainer: "_30sE-nAqWWBwaLrn_A5fOo",
				spacing: "_2v9pvC6_Qi1nquehHHhY-P",
				shifted: "_2svEVRJQyaARwOWmCygTP-"
			}
		},
		"./node_modules/@reddit/avatars.ui.editor-navigation/dist/EditorNavigation.module.less": function(e, t, a) {
			e.exports = {
				editorNavigation: "_3IPz6WwQGjUm6YZ7fltm3W",
				selectorContainer: "_3mVnJgjnAQmOrHZKTlf4gl",
				carouselButton: "_13z3LGFwvP5INxh7fWGi3D",
				carouselButtonIcon: "_3Kpv66Xrzls4dhOZnk2VKb",
				previous: "_2jCyM4uzKouqbMSEhc5ich",
				pillOptionsContainer: "_3cD8K2nHNqeWwaDyVHhU64",
				pillOption: "_1I9u7QOMsUGrH9w-835ZtZ",
				focusElement: "x9tA8FOA0gNuhu0_7h0Bx",
				tabFont: "_3t8USswWSSkZvlQw4NvRR5",
				selectedPillOption: "_1b-oYAZP5PJH1CnyzwFhIt",
				sparkle: "_2ApydDOC0KZyQl1sv-ZE81",
				fadeIn: "_3PvJ0il6DZWG5MScUvdut_",
				sparkle1: "UBa_42wqRovIqog1qERJC",
				sparkle2: "_3AbyMqpY4okdJalX9ERnJg",
				sparkle3: "_1Ot7OYHzeQ3suHQVeTCkXc",
				sparkle4: "V3OjHdlewzg9R4s5MdRVZ",
				cardNavigation: "_32wHTnjjdRUCxjNbjlvnNx",
				backButton: "_3rUh-4B2fYdMOtB6wG9aq8"
			}
		},
		"./node_modules/@reddit/avatars.ui.editor/dist/Editor.module.less": function(e, t, a) {
			e.exports = {
				overlay: "_2HMq6VS-8v7RwndxjLLoQt",
				active: "_1gkgvGzlwO8vy3KEmfxBzX",
				container: "tzCejg4MpyC04au8iWi91",
				nftMenu: "_3L2kjjsOCut5Q6qE-lyNgn"
			}
		},
		"./node_modules/@reddit/avatars.ui.icon-badge/dist/IconBadge.module.less": function(e, t, a) {
			e.exports = {
				iconBadgeContainer: "rJMpQWFuquPXGP3iUSpAu"
			}
		},
		"./node_modules/@reddit/avatars.ui.me-card/dist/MeCard.module.less": function(e, t, a) {
			e.exports = {
				meCardWrapper: "_3ICCd1Hro744I01LCtumCn",
				cardName: "_2L3H9pInoaNQTQ4g9Kb3x9",
				assetPreview: "Ke7tlQ7v2ezS9vUozz9aO"
			}
		},
		"./node_modules/@reddit/avatars.ui.me-tab/dist/MeTab.module.less": function(e, t, a) {
			e.exports = {
				meTabWrapper: "_3_bLFJ8W8-0yV9Fp8PHcyH",
				sectionTitle: "_3P0sv6JnegT2DqwyuYe3eu"
			}
		},
		"./node_modules/@reddit/avatars.ui.modal-root/dist/ModalRoot.module.less": function(e, t, a) {
			e.exports = {
				modalContainer: "g8EHgVOL9zOMXmfkAHcPo",
				modalOverlay: "_2fopDjmdSEo-vUsq2iDGn4",
				modalWrapper: "_2WGSZ_cePqnVyR7NUrVLkJ"
			}
		},
		"./node_modules/@reddit/avatars.ui.modal-root/dist/close.png": function(e, t, a) {
			e.exports = a.p + "img/close.png"
		},
		"./node_modules/@reddit/avatars.ui.modal-wrapper/dist/ClosetFullModal/ClosetFullModal.module.less": function(e, t, a) {
			e.exports = {
				closetModalWrapper: "_2993x6HxuilDMIr3EcIXmm"
			}
		},
		"./node_modules/@reddit/avatars.ui.modal-wrapper/dist/ClosetFullModal/ClosetFullModalBody/styles.module.less": function(e, t, a) {
			e.exports = {
				header: "_16L2kmxzJlTSYj0rnE39kr",
				title: "_3DfmX95Nq2uT7pf9lOD6Lb",
				description: "_1DaQB2UiLnJxNfQGFqpSMR",
				closeBtn: "p_EHTOchgI-AWXsGrFZPn",
				closeBtnImage: "_1OVqPp7_T9ao9Qdbed5jyS",
				mainContent: "Me0p17F4I_VL8S0vJVfte",
				detailsAccesoriesWrapper: "-SHyQao5A038pg2eZpC3h",
				detailsAccesories: "_3YglCHF9BXsLYxLWj_TTIC",
				item: "_3dToiYg_zScDjGRyJl5h2p",
				footer: "_3sxzpCEUeSWaEOhSBsNfWW",
				backBtn: "_1EIDNwtkBo94strVy7iZFn",
				removeBtn: "_12c1Gh965yXt0kzBW7zqEr",
				disabled: "_1DAEVFwWL3NWeWLsas8sIX"
			}
		},
		"./node_modules/@reddit/avatars.ui.modal-wrapper/dist/ClosetIntroModal/ClosetIntroModal.module.less": function(e, t, a) {
			e.exports = {
				closetModalWrapper: "_1e2tI-eXAA5uUcAewihU89",
				closeModalContentWrapper: "_1ldEQ9j4f-GSsfDrksKy_W",
				closetImageWrapper: "hwHXjKIifQeua3PccuNbZ",
				sparkle1: "_2zAYj13g--zbgcJNqUukB1",
				sparkle2: "_2jti-m1vvEWXAmDD1-MfqV",
				sparkle3: "_2hKiAsImQO0JbA68wvCszf",
				sparkle4: "_10CfXAq13D3sW42P9KQ5my",
				sparkle5: "pvOaOTGw9b4GL4Q-kiTPu",
				sparkle6: "_1FERkUDVlF8GuLcZZac218",
				closetImage: "xhpUeHpC7osQsWFOQc5Sf",
				closeBtn: "_1ZJmV4p9wXbZ5zcsaTTChs",
				closeBtnImage: "h6AzVXHNWvc9OIA1ThZ_3",
				continueBtn: "H8La_OVpSwX-KhKv8I8-p",
				title: "_1DpgPsKZjf9TGDuF6Fxt0h",
				secondaryTitle: "_3P0KQsdyEmzLD8JoszYPzF",
				infoTextWrapper: "WBZT2p_PqDB1CjX9iN8bR",
				premiumAlert: "_30-2T44Io0huS_7O5WGi_M"
			}
		},
		"./node_modules/@reddit/avatars.ui.modal-wrapper/dist/RemoveItemFromClosetModal/RemoveItemFromClosetModal.module.less": function(e, t, a) {
			e.exports = {
				removeClosetItemModalWrapper: "_937kNWV1b9QCBPc0BhCKK",
				header: "_2QfldbYDhksxPbIw8a8_qk",
				mainContent: "_19vlHZfikFw-sMm3CJUkwT",
				footer: "_3orE3sqKnlX_d8FNibYbSQ",
				closeBtn: "_2C_AUZVCaZqz_EyQxbdiVV",
				backBtn: "_2LAE6yPjOrjEL1JDcxVzyF",
				removeBtn: "_1-qKtDdPUL4W9BtrA5C4eE",
				closeBtnImage: "_21N15Yb667MtghEzLpYn0t"
			}
		},
		"./node_modules/@reddit/avatars.ui.modal-wrapper/dist/WearingModal/WearingModal.module.less": function(e, t, a) {
			e.exports = {
				wearingModalWrapper: "_3Qsox-szX_-Iq2JulOjJDG",
				wearingModal: "_1CHmLBcuPTRsTBNU988SS9",
				modalTitle: "_11vhZpfY2YdwnHtpgnbPZe",
				closeButtonContainer: "_3OrbYdDLeRH50xw7CRjsbs",
				closeButton: "_2tCDNS3HKh--aAFdSOhjV1"
			}
		},
		"./node_modules/@reddit/avatars.ui.outfit-tile/dist/OutfitTile.module.less": function(e, t, a) {
			e.exports = {
				card: "_2C3GSSFUmKHRHyC6ZGTtDV",
				outfitImage: "_1Pc4LaCDAro7oVRfw1M2MS",
				imageWrapper: "qRAXF6wQkaLaZhAeeKxUP",
				capabilityWrapper: "_2U5OR5ubkAU-Hi5leG764g",
				cardTitle: "_2NRzuoswt7TqyGbd4Q1EKU"
			}
		},
		"./node_modules/@reddit/avatars.ui.outfit/dist/Outfit.module.less": function(e, t, a) {
			e.exports = {
				detailsWrapper: "KI-a6XzeLDPBNWZOoJhlm",
				detailsHeader: "hGvpFmKSW0Lkv510B-4Ph",
				detailsBack: "_1Aei4DO9TQ3aUU3rJJNMGp",
				detailsTitle: "_8y6TueeInp9j2iyaBHZSI",
				detailsAccesoriesWrapper: "hAWZjb9bvfYi-bX1EbzHM",
				detailsAccesories: "_3CixXlE_5NYAlDMPssFWhy",
				item: "_150XS2k6uuM1-BtFwX4cdb",
				backButton: "_7RGHqx93NEtoOVwBCNWCU"
			}
		},
		"./node_modules/@reddit/avatars.ui.past-avatars-upsell-modal/dist/PastAvatarsUpsellModal.module.less": function(e, t, a) {
			e.exports = {
				pastAvatarsUpsellModalWrapper: "_1R9FxQ-Z4n5XsOyIVWAGPp",
				closeBtn: "_3O7WHTAcOK13sW1Ml_qK7K",
				closeBtnImage: "_1YFNmtgpJYyJugmjvIsA7x",
				footer: "UmrLBFTMyQO5wIrMNGmph",
				backBtn: "qrBm5QHuHdteMlnE4z6Dr",
				premiumBtn: "_3yg_c1AuUqtQEBe2AolG48",
				contentWrapper: "_1o7f_ZbQ4oHCoIBHDqhgdN",
				header: "_36OHwg60LLp0B6oyovTsBR",
				secondaryText: "_1kQgeF-C7yss3Bn3v0GnYv",
				pastAvatarImage: "bnUczeLXijo6L4WOcquQa"
			}
		},
		"./node_modules/@reddit/avatars.ui.past-avatars/dist/PastAvatars.module.less": function(e, t, a) {
			e.exports = {
				wrapper: "_19s2WJhb6f0x4K3caRuxRi",
				sectionTitle: "_1S2S7b4eNeiYbddV1rZur3",
				sectionDescription: "_3z_0-Bi5OL_oWm8cS4Ed1s",
				pastAvatars: "_1O7lnJDp4UbVzWY8olPQAd",
				emptyOutfitTile: "_3bSqOfPrlDDrYHYXLo59V_",
				outfitTile: "_2pc_L6PhDXEJuN2A28EOcN"
			}
		},
		"./node_modules/@reddit/avatars.ui.past-avatars/dist/empty-snoo.svg": function(e, t, a) {
			e.exports = a.p + "img/empty-snoo.svg"
		},
		"./node_modules/@reddit/avatars.ui.preview/dist/NftPreview/NftPreview.module.less": function(e, t, a) {
			e.exports = {
				ownershipText: "_1viGi4froJcGm_u2dQZARl"
			}
		},
		"./node_modules/@reddit/avatars.ui.preview/dist/Preview.module.less": function(e, t, a) {
			e.exports = {
				preview: "_3PVlhDiIKxCqm6af5zyd_y",
				container: "_2H4kFljMQkR1B8rMqwrLMP",
				rendering: "_1GRGcrZ9-N_c97V1h0QYCW",
				frame: "_2ZVb0QMEwh904gdQABkQWF",
				activeUserAttribution: "_1ljfuAjEY400AGhBWpiGVX",
				saveNavigation: "kCF8DEUwwiS261HD9FXSz",
				wearingButton: "_2m_DWQjQeI1BjYQa1bBM1W",
				wearingCount: "_1yv8848zkMhFcKRTt-T8Q2"
			}
		},
		"./node_modules/@reddit/avatars.ui.runway/dist/Runway.module.less": function(e, t, a) {
			e.exports = {
				runwayWrapper: "_2255cw7mJ9XBPx3zUWW7X1",
				runwayTitle: "_2zOI1_SnxpASqx-6iXCvKa",
				runway: "_3OaBiWnPsbMErr97G5jLhd"
			}
		},
		"./node_modules/@reddit/avatars.ui.sheet/dist/Sheet.module.less": function(e, t, a) {
			e.exports = {
				sheetWrapper: "_1LSVYDzMvUeCJEdje4M-2u",
				active: "_2gpG39JreMZrJ4zxXyvBmR",
				sheetHeader: "_2ilp-1BrzJenBh-WB5veY9",
				sheetBack: "_2mknaOKWvz3t39h_HO899Z",
				backButton: "Of4Z2IYnzcoTNRMxbWOA7",
				title: "_2Ij5_DvKozOL9t0nVm583S"
			}
		},
		"./node_modules/@reddit/avatars.ui.style-card/dist/StyleCard.module.less": function(e, t, a) {
			e.exports = {
				styleCardWrapper: "JNkHUrHXLqCQucSawUcoY",
				cardName: "_18zIwO0ad47o86fkkQwKVY",
				"card-periwinkle": "_3mqcz7JXchTcjQzocC_Fsh",
				cardPeriwinkle: "_3mqcz7JXchTcjQzocC_Fsh",
				"card-red": "PKPqGs1gE1POyPOEJaHKi",
				cardRed: "PKPqGs1gE1POyPOEJaHKi",
				"card-green": "_2FWRmmL6N9sCm1UxNPKdbS",
				cardGreen: "_2FWRmmL6N9sCm1UxNPKdbS",
				"card-orange": "_3avihGL00ptN_lRXuL-eSk",
				cardOrange: "_3avihGL00ptN_lRXuL-eSk",
				"card-purple": "_2sC49uYqUuPRcKZuKo2Shw",
				cardPurple: "_2sC49uYqUuPRcKZuKo2Shw",
				"card-blue": "_3BHLOf8YQQsVMPak3w_wXX",
				cardBlue: "_3BHLOf8YQQsVMPak3w_wXX"
			}
		},
		"./node_modules/@reddit/avatars.ui.style-tab/dist/StyleTab.module.less": function(e, t, a) {
			e.exports = {
				styleTabWrapper: "_1KNokcRwE9_vyKJdRw75MO",
				active: "_3BQf_CO3FaT7jMwfQpvyE_",
				hidden: "E2dOPdKeFwo0nZx-_3sVs"
			}
		},
		"./node_modules/@reddit/avatars.ui.tile/dist/ClosetButton/ClosetButton.module.less": function(e, t, a) {
			e.exports = {
				closetIconContainer: "_2IceXxklXTvPIQ6feIANXc",
				closetIconImage: "_23vSbewM0Rjp3nKvzDsJFD",
				sparkle1: "_117hXlWVH5ulPF1F__HENg",
				sparkle2: "_5OePS77EFX9390t1Kbj4X",
				sparkle3: "_27dQ0zHaYSDlUtuBy7O2gY",
				active: "_3qMk9V2fCBIggStMIBA8S9"
			}
		},
		"./node_modules/@reddit/avatars.ui.tile/dist/Tile.module.less": function(e, t, a) {
			e.exports = {
				accessoryWrapper: "_3fKmzsYTDqNvooLWqsRDHA",
				accessory: "_342Qd4H_huax9cYOF3qmV-",
				active: "vMurWzgUILFynH7YwPoEQ",
				statusIndicator: "_2-Pj69jyBJuQSjCxLov_so",
				selected: "_3726Bwk0c93Rnnc71hd_Te",
				nftWrapper: "_3RKF6C3NaEQwgErGzUktA7",
				statusIndicatorUrgent: "_9omGKynz7CaqZL5kr7dvT",
				closetModalWrapper: "_3C6gke3aQ7euvP3W_lWIqL",
				removeClosetItemModalWrapper: "_2HFbv4z207MIgdEWwC67wN"
			}
		},
		"./node_modules/@reddit/avatars.ui.try-it-on/dist/ButtonBar/ButtonBar.module.less": function(e, t, a) {
			e.exports = {
				buttonBar: "_2Wg7gsZLfNych5yXWxoxZs",
				legalText: "_2FbahGnddL2efzUTcQtKdW",
				tryItOnButton: "y51W0ESdzat-o23q0AA0U",
				tryItOnButtonSecondary: "_1Uf__BwlA2FYzLnnPN-s_D"
			}
		},
		"./node_modules/@reddit/avatars.ui.try-it-on/dist/TryItOn.module.less": function(e, t, a) {
			e.exports = {
				tryItOnWrapper: "_2F5zTWNP2ARW15Z5LCI2mW",
				previewContainer: "_3_tts1OU5zoHGR8JaxxEcO",
				imagePreview: "_3D_SMYbhMxYmgtBYfXDOfM",
				creatorAttribution: "_25_TWMSrRQak-qUHQWMlzQ"
			}
		},
		"./node_modules/lodash/_arraySampleSize.js": function(e, t, a) {
			var s = a("./node_modules/lodash/_baseClamp.js"),
				o = a("./node_modules/lodash/_copyArray.js"),
				n = a("./node_modules/lodash/_shuffleSelf.js");
			e.exports = function(e, t) {
				return n(o(e), s(t, 0, e.length))
			}
		},
		"./node_modules/lodash/_baseClamp.js": function(e, t) {
			e.exports = function(e, t, a) {
				return e == e && (void 0 !== a && (e = e <= a ? e : a), void 0 !== t && (e = e >= t ? e : t)), e
			}
		},
		"./node_modules/lodash/_baseSampleSize.js": function(e, t, a) {
			var s = a("./node_modules/lodash/_baseClamp.js"),
				o = a("./node_modules/lodash/_shuffleSelf.js"),
				n = a("./node_modules/lodash/values.js");
			e.exports = function(e, t) {
				var a = n(e);
				return o(a, s(t, 0, a.length))
			}
		},
		"./node_modules/lodash/isElement.js": function(e, t, a) {
			var s = a("./node_modules/lodash/isObjectLike.js"),
				o = a("./node_modules/lodash/isPlainObject.js");
			e.exports = function(e) {
				return s(e) && 1 === e.nodeType && !o(e)
			}
		},
		"./node_modules/lodash/random.js": function(e, t, a) {
			var s = a("./node_modules/lodash/_baseRandom.js"),
				o = a("./node_modules/lodash/_isIterateeCall.js"),
				n = a("./node_modules/lodash/toFinite.js"),
				r = parseFloat,
				l = Math.min,
				c = Math.random;
			e.exports = function(e, t, a) {
				if (a && "boolean" != typeof a && o(e, t, a) && (t = a = void 0), void 0 === a && ("boolean" == typeof t ? (a = t, t = void 0) : "boolean" == typeof e && (a = e, e = void 0)), void 0 === e && void 0 === t ? (e = 0, t = 1) : (e = n(e), void 0 === t ? (t = e, e = 0) : t = n(t)), e > t) {
					var i = e;
					e = t, t = i
				}
				if (a || e % 1 || t % 1) {
					var d = c();
					return l(e + d * (t - e + r("1e-" + ((d + "").length - 1))), t)
				}
				return s(e, t)
			}
		},
		"./node_modules/lodash/sampleSize.js": function(e, t, a) {
			var s = a("./node_modules/lodash/_arraySampleSize.js"),
				o = a("./node_modules/lodash/_baseSampleSize.js"),
				n = a("./node_modules/lodash/isArray.js"),
				r = a("./node_modules/lodash/_isIterateeCall.js"),
				l = a("./node_modules/lodash/toInteger.js");
			e.exports = function(e, t, a) {
				return t = (a ? r(e, t, a) : void 0 === t) ? 1 : l(t), (n(e) ? s : o)(e, t)
			}
		},
		"./node_modules/lodash/without.js": function(e, t, a) {
			var s = a("./node_modules/lodash/_baseDifference.js"),
				o = a("./node_modules/lodash/_baseRest.js"),
				n = a("./node_modules/lodash/isArrayLikeObject.js"),
				r = o((function(e, t) {
					return n(e) ? s(e, t) : []
				}));
			e.exports = r
		},
		"./node_modules/prop-types/factoryWithThrowingShims.js": function(e, t, a) {
			"use strict";
			var s = a("./node_modules/prop-types/lib/ReactPropTypesSecret.js");

			function o() {}
			e.exports = function() {
				function e(e, t, a, o, n, r) {
					if (r !== s) {
						var l = new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");
						throw l.name = "Invariant Violation", l
					}
				}

				function t() {
					return e
				}
				e.isRequired = e;
				var a = {
					array: e,
					bool: e,
					func: e,
					number: e,
					object: e,
					string: e,
					symbol: e,
					any: e,
					arrayOf: t,
					element: e,
					instanceOf: t,
					node: e,
					objectOf: t,
					oneOf: t,
					oneOfType: t,
					shape: t,
					exact: t
				};
				return a.checkPropTypes = o, a.PropTypes = a, a
			}
		},
		"./node_modules/prop-types/index.js": function(e, t, a) {
			e.exports = a("./node_modules/prop-types/factoryWithThrowingShims.js")()
		},
		"./node_modules/prop-types/lib/ReactPropTypesSecret.js": function(e, t, a) {
			"use strict";
			e.exports = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"
		},
		"./node_modules/react-shadow-root/lib/ReactShadowRoot.js": function(e, t, a) {
			"use strict";
			Object.defineProperty(t, "__esModule", {
				value: !0
			}), t.default = void 0;
			var s = r(a("./node_modules/react/index.js")),
				o = r(a("./node_modules/react-dom/index.js")),
				n = r(a("./node_modules/prop-types/index.js"));

			function r(e) {
				return e && e.__esModule ? e : {
					default: e
				}
			}

			function l(e) {
				return (l = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
					return typeof e
				} : function(e) {
					return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
				})(e)
			}

			function c(e, t) {
				for (var a = 0; a < t.length; a++) {
					var s = t[a];
					s.enumerable = s.enumerable || !1, s.configurable = !0, "value" in s && (s.writable = !0), Object.defineProperty(e, s.key, s)
				}
			}

			function i(e, t) {
				return !t || "object" !== l(t) && "function" != typeof t ? d(e) : t
			}

			function d(e) {
				if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
				return e
			}

			function u() {
				if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
				if (Reflect.construct.sham) return !1;
				if ("function" == typeof Proxy) return !0;
				try {
					return Date.prototype.toString.call(Reflect.construct(Date, [], (function() {}))), !0
				} catch (e) {
					return !1
				}
			}

			function m(e) {
				return (m = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
					return e.__proto__ || Object.getPrototypeOf(e)
				})(e)
			}

			function p(e, t) {
				return (p = Object.setPrototypeOf || function(e, t) {
					return e.__proto__ = t, e
				})(e, t)
			}

			function v(e, t, a) {
				return t in e ? Object.defineProperty(e, t, {
					value: a,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : e[t] = a, e
			}
			var b = window && window.ShadowRoot && window.ShadowRoot.prototype.hasOwnProperty("adoptedStyleSheets") && window.CSSStyleSheet && window.CSSStyleSheet.prototype.hasOwnProperty("replace"),
				f = window && window.Element && window.Element.prototype.hasOwnProperty("attachShadow"),
				y = function(e) {
					! function(e, t) {
						if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
						e.prototype = Object.create(t && t.prototype, {
							constructor: {
								value: e,
								writable: !0,
								configurable: !0
							}
						}), t && p(e, t)
					}(b, e);
					var t, a, n, r, l = (t = b, function() {
						var e, a = m(t);
						if (u()) {
							var s = m(this).constructor;
							e = Reflect.construct(a, arguments, s)
						} else e = a.apply(this, arguments);
						return i(this, e)
					});

					function b() {
						var e;
						return function(e, t) {
							if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
						}(this, b), v(d(e = l.call(this)), "state", {
							initialized: !1
						}), e.placeholder = s.default.createRef(), e
					}
					return a = b, (n = [{
						key: "componentDidMount",
						value: function() {
							var e = this.props,
								t = e.delegatesFocus,
								a = e.mode,
								s = e.stylesheets;
							this.shadowRoot = this.placeholder.current.parentNode.attachShadow({
								delegatesFocus: t,
								mode: a
							}), s && (this.shadowRoot.adoptedStyleSheets = s), this.setState({
								initialized: !0
							})
						}
					}, {
						key: "render",
						value: function() {
							return this.state.initialized ? o.default.createPortal(this.props.children, this.shadowRoot) : s.default.createElement("span", {
								ref: this.placeholder
							})
						}
					}]) && c(a.prototype, n), r && c(a, r), b
				}(s.default.PureComponent);
			t.default = y, v(y, "constructableStylesheetsSupported", b), v(y, "constructibleStylesheetsSupported", b), v(y, "defaultProps", {
				delegatesFocus: !1,
				mode: "open"
			}), v(y, "displayName", "ReactShadowRoot"), v(y, "propTypes", {
				delegatesFocus: n.default.bool,
				mode: n.default.oneOf(["open", "closed"]),
				stylesheets: n.default.arrayOf((function(e, t, a, s, o) {
					if (!(e[t] instanceof window.CSSStyleSheet)) return new Error("Invalid prop `".concat(o, "` supplied to `").concat(a, "`. Expected an instance of `CSSStyleSheet`."))
				}))
			}), v(y, "shadowRootSupported", f)
		},
		"./node_modules/react-shadow-root/lib/index.js": function(e, t, a) {
			"use strict";
			var s;
			Object.defineProperty(t, "__esModule", {
				value: !0
			}), t.default = void 0;
			var o = ((s = a("./node_modules/react-shadow-root/lib/ReactShadowRoot.js")) && s.__esModule ? s : {
				default: s
			}).default;
			t.default = o
		}
	}
]);
//# sourceMappingURL=https://www.redditstatic.com/desktop2x/4.c46889909642a7c5aebd.js.map