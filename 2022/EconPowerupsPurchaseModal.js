// https://www.redditstatic.com/desktop2x/EconPowerupsPurchaseModal.1d52b9dd0b4d71b44ce7.js
// Retrieved at 8/18/2022, 11:30:05 AM by Reddit Dataminer v1.0.0
(window.__LOADABLE_LOADED_CHUNKS__ = window.__LOADABLE_LOADED_CHUNKS__ || []).push([
	["EconPowerupsPurchaseModal"], {
		"./src/reddit/components/Econ/Common/ModalCloseButton/index.m.less": function(e, t, s) {
			e.exports = {
				closeButton: "zV6beQLWIuWX5Q9SvWfDR",
				highContrast: "_19iGSTvU7FOqhpDpMWKtDr",
				closeIcon: "_17EZNlAorafFssuT6Gw_Zg"
			}
		},
		"./src/reddit/components/Econ/Common/ModalCloseButton/index.tsx": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return d
			}));
			var n = s("./src/lib/classNames/index.ts"),
				a = s("./node_modules/react/index.js"),
				o = s.n(a),
				r = s("./src/reddit/components/ModalStyledComponents/index.tsx"),
				l = s("./src/reddit/components/Econ/Common/ModalCloseButton/index.m.less"),
				c = s.n(l);
			const {
				fbt: i
			} = s("./node_modules/fbt/lib/FbtPublic.js"), d = e => {
				let {
					className: t,
					highContrast: s,
					onClick: a
				} = e;
				return o.a.createElement("button", {
					onClick: a,
					className: Object(n.a)(c.a.closeButton, {
						[c.a.highContrast]: s
					}, t),
					"aria-label": i._("Close", null, {
						hk: "3Qarlp"
					})
				}, o.a.createElement(r.b, {
					className: c.a.closeIcon
				}))
			}
		},
		"./src/reddit/components/Econ/PowerupsMarketingModal/Header/index.m.less": function(e, t, s) {
			e.exports = {
				container: "_3-wzlsd2L9K9BE7yms9IhJ",
				title: "_258n2TylpikH2fhZLhlAgr",
				subtitle: "_1AYSLhpiU1fIwgPPxu2Xuy"
			}
		},
		"./src/reddit/components/Econ/PowerupsMarketingModal/Header/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./src/lib/classNames/index.ts"),
				a = s("./node_modules/react/index.js"),
				o = s.n(a),
				r = s("./src/reddit/components/Econ/PowerupsMarketingModal/Header/index.m.less"),
				l = s.n(r);
			t.a = e => o.a.createElement("header", {
				className: Object(n.a)(l.a.container, e.className)
			}, o.a.createElement("h2", {
				className: l.a.title
			}, e.title), o.a.createElement("h3", {
				className: l.a.subtitle
			}, e.subtitle))
		},
		"./src/reddit/components/Econ/PowerupsPurchaseModal/PowerupsPurchase/PowerupsPremiumButton/index.m.less": function(e, t, s) {
			e.exports = {
				button: "_1mc-IVNBsfKUugqkP3rda7",
				loadingIcon: "_15g-u6pLWEgyq-W1q8zSji"
			}
		},
		"./src/reddit/components/Econ/PowerupsPurchaseModal/PowerupsPurchase/PowerupsProgressControl/PowerupsCount/index.m.less": function(e, t, s) {
			e.exports = {
				container: "_2BuBEDqT7lkg3pO2WKDev7",
				control: "_1favHXSOScXwn1RBgoTcQR",
				locked: "_1zr44sXfpGbr_0IvOKMhUe",
				button: "_3paafvflLXs20pV91RRAB0",
				buttonIconElement: "_1SxKXgyGKQ5q6hRVXs8exA",
				decrementButton: "_2ZZ4y8uLTNayuVN_S-2Nf5",
				incrementButton: "_190moU3v0ZouK_rrsulWXf",
				value: "_2kUt45BOMdEQHtdaCmdozL",
				icon: "_5d5MTurdJPq_vddOMX6pc"
			}
		},
		"./src/reddit/components/Econ/PowerupsPurchaseModal/PowerupsPurchase/PowerupsProgressControl/ProgressBar/index.m.less": function(e, t, s) {
			e.exports = {
				titleRow: "_1i5gFES8rHCUngNfydAuWr",
				barRow: "_2C7hWoSd6z9a-xV6Z3dnje",
				track: "No3J_0QnbZSfXaewR0dYK",
				progress: "_3oU4QH4ZKf2Ju86PxWmVvt",
				additionalProgress: "_31fdHeoPmiYpMGtd2vSSdL",
				opacityBlink: "_1eAQSptthEkyF-iGElcw0A"
			}
		},
		"./src/reddit/components/Econ/PowerupsPurchaseModal/PowerupsPurchase/PowerupsProgressControl/index.m.less": function(e, t, s) {
			e.exports = {
				container: "_2iu3jX5bVR5jy7OP6neJ4W",
				count: "_2AMO2XnYhlJu67x263BGll"
			}
		},
		"./src/reddit/components/Econ/PowerupsPurchaseModal/PowerupsPurchase/index.m.less": function(e, t, s) {
			e.exports = {
				progressControl: "_2SIcayqih-ki47E6ubsDLN",
				details: "_20wZ73zqa9DS0namcCJdoA",
				anonymousCheckbox: "_2TwVYjhqi8rCciDTHrMPTc",
				button: "_2zABc383welm4OSB9jgeQG",
				Icon: "_20ZTInSCuk9gGcfQ6D7pel",
				icon: "_20ZTInSCuk9gGcfQ6D7pel",
				isLeft: "ivqRDi80dfqnzNnU7r1Bp",
				isRight: "_3l-suZErGWJnDlAcWKjk15"
			}
		},
		"./src/reddit/components/Econ/PowerupsPurchaseModal/index.m.less": function(e, t, s) {
			e.exports = {
				modal: "_2f9jiTDa9UHMVSyfqhg9zd"
			}
		},
		"./src/reddit/components/Econ/PowerupsPurchaseModal/index.tsx": function(e, t, s) {
			"use strict";
			s.r(t);
			var n = s("./node_modules/react/index.js"),
				a = s.n(n),
				o = s("./node_modules/react-redux/es/index.js"),
				r = s("./src/reddit/components/PowerupsSidebar/PowerupsBackground.tsx"),
				l = s("./src/reddit/selectors/platform.ts"),
				c = s("./node_modules/reselect/es/index.js"),
				i = s("./src/higherOrderComponents/asModal/index.tsx"),
				d = s("./src/lib/classNames/index.ts"),
				u = s("./src/reddit/actions/modal.ts"),
				m = s("./src/reddit/components/Econ/Common/ModalCloseButton/index.tsx"),
				p = s("./src/reddit/components/Econ/PowerupsMarketingModal/Header/index.tsx"),
				h = s("./src/reddit/constants/modals.ts"),
				b = s("./src/reddit/contexts/PageLayer/index.tsx"),
				P = s("./src/reddit/hooks/useTracking.ts"),
				w = s("./src/reddit/helpers/trackers/powerups.ts"),
				E = s("./src/reddit/actions/gold/powerups.ts"),
				x = s("./src/reddit/selectors/gold/powerups/index.ts"),
				f = s("./src/reddit/controls/CheckboxWithLabel/index.tsx"),
				g = s("./src/reddit/controls/Button/index.tsx"),
				_ = s("./src/reddit/controls/LoadingIcon/index.tsx"),
				M = s("./src/reddit/components/Econ/PowerupsPurchaseModal/PowerupsPurchase/PowerupsPremiumButton/index.m.less"),
				v = s.n(M);
			const {
				fbt: C
			} = s("./node_modules/fbt/lib/FbtPublic.js"), N = e => {
				let {
					className: t,
					subredditId: s
				} = e;
				const n = Object(o.e)(x.c),
					r = Object(o.e)(x.b),
					l = Object(o.e)(x.d),
					c = Object(o.d)();
				return a.a.createElement(g.t, {
					priority: g.c.Primary,
					onClick: () => {
						c(Object(E.h)(s, l, n))
					},
					className: Object(d.a)(t, v.a.button),
					disabled: r
				}, r ? a.a.createElement(_.a, {
					className: v.a.loadingIcon,
					sizePx: 12
				}) : C._({
					"*": "Apply Your Premium Powerups",
					_1: "Apply Your Premium Powerup"
				}, [C._plural(l)], {
					hk: "1hr0lH"
				}))
			};
			var L = s("./src/reddit/components/PowerupsSidebar/common/utils.ts"),
				O = s("./src/reddit/components/Econ/PowerupsPurchaseModal/PowerupsPurchase/PowerupsProgressControl/PowerupsCount/index.m.less"),
				k = s.n(O);
			var j = function(e) {
					const {
						className: t,
						onChange: s,
						style: n,
						value: o,
						min: r,
						max: l
					} = e, c = e => s(Math.max(Math.min(o + e, l || Number.POSITIVE_INFINITY), r || 0)), i = l === r, u = Object(L.a)(o);
					return a.a.createElement("div", {
						className: Object(d.a)(t, k.a.container),
						style: n
					}, a.a.createElement("div", {
						className: Object(d.a)(k.a.control, {
							[k.a.locked]: i
						})
					}, !i && a.a.createElement("button", {
						className: Object(d.a)(k.a.button, k.a.decrementButton),
						onClick: () => c(-1)
					}), a.a.createElement("div", {
						className: k.a.value
					}, a.a.createElement(u, {
						className: k.a.icon
					}), a.a.createElement("span", null, o)), !i && a.a.createElement("button", {
						className: Object(d.a)(k.a.button, k.a.incrementButton),
						onClick: () => c(1)
					})))
				},
				y = s("./src/reddit/components/Econ/PowerupsPurchaseModal/PowerupsPurchase/PowerupsProgressControl/ProgressBar/index.m.less"),
				B = s.n(y);
			const {
				fbt: S
			} = s("./node_modules/fbt/lib/FbtPublic.js");
			var z = e => {
					const {
						additionalCount: t,
						className: s,
						count: n,
						maxCount: o
					} = e;
					if (!o) return null;
					const r = Math.min(o, n) / o,
						l = Math.min(o, n + (t || 0)) / o;
					return a.a.createElement("div", {
						className: s
					}, a.a.createElement("div", {
						className: B.a.titleRow
					}, a.a.createElement("span", null, S._("Powerups", null, {
						hk: "DrcXp"
					})), a.a.createElement("span", null, n < o ? `${n}/${o}` : n)), a.a.createElement("div", {
						className: B.a.barRow
					}, a.a.createElement("div", {
						className: B.a.track
					}), a.a.createElement("div", {
						className: B.a.progress,
						style: {
							width: `${100*r}%`
						}
					}), t && a.a.createElement("div", {
						className: B.a.additionalProgress,
						style: {
							width: `${100*(l-r)}%`,
							left: `${100*r}%`
						}
					})))
				},
				A = s("./src/reddit/components/Econ/PowerupsPurchaseModal/PowerupsPurchase/PowerupsProgressControl/index.m.less"),
				I = s.n(A);
			var D = function(e) {
					const {
						className: t,
						count: s,
						maxCount: n,
						onChange: o,
						powerups: r
					} = e, {
						tier: l,
						tiersInfo: c
					} = r, i = (c[l] || c[l - 1]).powerupsCost;
					if (!i) return null;
					const u = Math.min(i, i / 2 + r.count / 2, r.count + (s || 0) / 2) / i;
					return a.a.createElement("div", {
						className: Object(d.a)(t, I.a.container)
					}, a.a.createElement(z, {
						additionalCount: s,
						className: I.a.bar,
						count: r.count,
						maxCount: i
					}), a.a.createElement(j, {
						className: I.a.count,
						style: {
							left: `${100*u}%`
						},
						value: s,
						min: 1,
						max: n,
						onChange: o
					}))
				},
				F = s("./src/reddit/components/Econ/PowerupsPurchaseModal/PowerupsPurchase/index.m.less"),
				T = s.n(F);
			const {
				fbt: H
			} = s("./node_modules/fbt/lib/FbtPublic.js"), W = Object(c.c)({
				isAnonymous: x.c,
				powerups: x.i,
				powerupsCount: x.d,
				userPowerupsData: x.t
			});
			var R = Object(o.b)(W)((function(e) {
					const {
						isAnonymous: t,
						onCloseModal: s,
						powerups: r,
						powerupsCount: l,
						subredditId: c,
						userPowerupsData: i
					} = e, d = Object(o.d)(), u = Object(P.a)();
					return Object(n.useEffect)(() => {
						u(Object(w.g)())
					}, []), r && i && i.freeCount ? a.a.createElement(a.a.Fragment, null, a.a.createElement(D, {
						className: T.a.progressControl,
						count: l,
						maxCount: i.freeCount,
						onChange: e => d(Object(E.g)(e)),
						powerups: r
					}), a.a.createElement("div", {
						className: T.a.details
					}, a.a.createElement(f.a, {
						className: T.a.anonymousCheckbox,
						isSelected: t,
						onClick: () => (e => d(Object(E.b)(e)))(!t),
						text: H._("Powerup anonymously", null, {
							hk: "YXX31"
						})
					})), a.a.createElement(N, {
						className: T.a.button,
						subredditId: c
					})) : (s(), null)
				})),
				X = s("./src/reddit/components/Econ/PowerupsPurchaseModal/index.m.less"),
				q = s.n(X);

			function K() {
				return (K = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var n in s) Object.prototype.hasOwnProperty.call(s, n) && (e[n] = s[n])
					}
					return e
				}).apply(this, arguments)
			}
			const {
				fbt: U
			} = s("./node_modules/fbt/lib/FbtPublic.js"), V = Object(b.u)(), Y = Object(c.c)({
				currentSubreddit: l.t
			}), G = Object(o.b)(Y);
			const Z = Object(i.a)(V(G((function(e) {
				const {
					currentSubreddit: t
				} = e, s = Object(o.d)(), n = () => s(Object(u.g)(h.a.ECON_POWERUPS_PURCHASE));
				return t ? a.a.createElement(a.a.Fragment, null, a.a.createElement(p.a, {
					className: q.a.header,
					title: U._("Powerup {r/community}", [U._param("r/community", t.displayText)], {
						hk: "2HkBNV"
					}),
					subtitle: U._("Unlock perks for the whole community", null, {
						hk: "faCTq"
					})
				}), a.a.createElement(R, {
					subredditId: t.id,
					onCloseModal: n
				}), a.a.createElement(m.a, {
					onClick: n,
					highContrast: !0
				}), a.a.createElement(r.a, {
					space: r.b.MODAL
				})) : (n(), null)
			}))));
			t.default = e => a.a.createElement(Z, K({}, e, {
				className: Object(d.a)(e.className, q.a.modal)
			}))
		},
		"./src/reddit/components/PowerupsSidebar/PowerupsBackground.m.less": function(e, t, s) {
			e.exports = {
				background: "XVwx9Y9K0HdxTdtF2BPW0",
				isModal: "UtfYccpr1yXmbqvp5V4xO",
				colorBlockCorner: "_3cb-_dMe8EWVymoglw4OyK",
				isNightmodeOn: "_2aTpeK-XP6gqT5wf5i532u",
				colorBlockThrough: "_1oWuVmyyrm-f2cYxR7EV9F",
				circle: "NsyhNpI3rn1O5dhzAooci",
				circleStriped: "_3wLmFEQT-lNFxQtTZSBM-A",
				circleDotted: "_2Y6YoeMfdGRReebFzEkb1a",
				circleOrangeHollow: "_2MNXM_uf6rOUZgaO42Wnl0",
				circleGreenHollow: "_1ThCjjX1kI9WTSqGhdfbEY",
				circleYellowHollow: "_2tVCe8UCeeIcsfKn_uIZKT"
			}
		},
		"./src/reddit/components/PowerupsSidebar/PowerupsBackground.tsx": function(e, t, s) {
			"use strict";
			s.d(t, "b", (function() {
				return n
			})), s.d(t, "a", (function() {
				return m
			}));
			var n, a = s("./src/config.ts"),
				o = s("./src/lib/classNames/index.ts"),
				r = s("./node_modules/react/index.js"),
				l = s.n(r),
				c = s("./node_modules/react-redux/es/index.js"),
				i = s("./src/reddit/selectors/user.ts"),
				d = s("./src/reddit/components/PowerupsSidebar/PowerupsBackground.m.less"),
				u = s.n(d);
			! function(e) {
				e[e.SIDEBAR = 0] = "SIDEBAR", e[e.MODAL = 1] = "MODAL"
			}(n || (n = {}));
			const m = e => {
				let {
					space: t
				} = e;
				const s = Object(c.e)(i.db),
					r = t === n.MODAL;
				return l.a.createElement("div", {
					className: Object(o.a)(u.a.background, {
						[u.a.isNightmodeOn]: s,
						[u.a.isModal]: r
					})
				}, l.a.createElement("div", {
					className: u.a.colorBlockCorner
				}), l.a.createElement("div", {
					className: u.a.colorBlockThrough
				}), l.a.createElement("div", {
					className: u.a.circleStriped,
					style: {
						backgroundImage: s ? `url(${a.a.assetPath}/img/powerups/linecircle-lightblue.png)` : `url(${a.a.assetPath}/img/powerups/linecircle-blue.png)`
					}
				}), l.a.createElement("div", {
					className: u.a.circleOrangeHollow
				}), l.a.createElement("div", {
					className: u.a.circleDotted,
					style: {
						backgroundImage: `url(${a.a.assetPath}/img/powerups/dotcircle.png)`
					}
				}), l.a.createElement("div", {
					className: u.a.circleGreenHollow
				}), l.a.createElement("div", {
					className: u.a.circleYellowHollow
				}))
			}
		},
		"./src/reddit/components/PowerupsSidebar/common/utils.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return d
			})), s.d(t, "c", (function() {
				return u
			})), s.d(t, "b", (function() {
				return m
			}));
			var n = s("./src/config.ts"),
				a = s("./node_modules/fbt/lib/FbtPublic.js"),
				o = s("./src/reddit/icons/svgs/PowerupTier1/index.tsx"),
				r = s("./src/reddit/icons/svgs/PowerupTier2/index.tsx"),
				l = s("./src/reddit/icons/svgs/PowerupTier3/index.tsx");
			const c = 2,
				i = 3;

			function d(e) {
				return e >= i ? l.a : e >= c ? r.a : o.a
			}

			function u(e) {
				var t;
				const s = !e,
					a = `${n.a.assetPath}/img/powerups/snoovatar_anonymous.svg`;
				return s ? a : null === (t = null == e ? void 0 : e.icon) || void 0 === t ? void 0 : t.url
			}
			const m = e => {
				let {
					displayName: t,
					score: s
				} = e;
				return t || a.fbt._({
					"*": "Anonymous Heroes",
					_1: "Anonymous Hero"
				}, [a.fbt._plural(s)], {
					hk: "8kyEI"
				}).toString()
			}
		},
		"./src/reddit/controls/LoadingIcon/index.m.less": function(e, t, s) {
			e.exports = {
				loadingIcon: "_3LwT7hgGcSjmJ7ng7drAuq",
				spin: "ibDwUVR1CAykturOgqOS5",
				mCentered: "_2qr28EeyPvBWAsPKl-KuWN"
			}
		},
		"./src/reddit/controls/LoadingIcon/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react/index.js"),
				a = s.n(n),
				o = s("./src/lib/classNames/index.ts"),
				r = s("./src/reddit/controls/LoadingIcon/index.m.less"),
				l = s.n(r);
			t.a = e => {
				let {
					center: t,
					className: s,
					sizePx: n = 10
				} = e;
				return a.a.createElement("div", {
					className: Object(o.a)(l.a.loadingIcon, s, {
						[l.a.mCentered]: t
					}),
					style: {
						"--sizePx": `${n}px`
					},
					"data-testid": "LoadingIcon"
				})
			}
		},
		"./src/reddit/icons/svgs/PowerupTier1/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react/index.js"),
				a = s.n(n);
			t.a = e => a.a.createElement("svg", {
				className: e.className,
				viewBox: "0 0 74 74",
				fill: "none",
				xmlns: "http://www.w3.org/2000/svg",
				onClick: e.onClick,
				onMouseEnter: e.onMouseEnter,
				onMouseLeave: e.onMouseLeave,
				id: e.id
			}, e.title && a.a.createElement("title", null, e.title), a.a.createElement("path", {
				d: "M28.36 73.65a3.47 3.47 0 01-2.55-1.15l-6.94-7.59a3.47 3.47 0 01-.7-3.63l4.5-10.73h-2.73a3.47 3.47 0 01-2.57-1.15l-6.96-7.57a3.47 3.47 0 01-.65-3.67L25.19 2.62A3.47 3.47 0 0128.35.54l26.28-.2a3.47 3.47 0 012.58 1.16l6.94 7.59a3.47 3.47 0 01.16 4.5l-7.48 9.54c.27.16.52.36.73.6l6.93 7.58a3.47 3.47 0 010 4.7L30.91 72.53a3.47 3.47 0 01-2.55 1.12zM25.44 61.9l2.92 3.17 28.9-31.45-3.77-4.11h-3.47a3.47 3.47 0 01-2.61-5.62l9.67-12.32-3.9-4.26-22.48.16L17.02 38.8l4.42 4.8h6.45a3.47 3.47 0 013.2 4.81L25.44 61.9z",
				fill: "#000"
			}), a.a.createElement("path", {
				d: "M34.43 11.6l19.3-7.78 6.98 7.58-17.57 22.21 10.94-7.58 6.98 7.58-33.62 36.57-6.99-7.58L29.1 47l-10.1.06L12 39.5l22.42-27.9z",
				fill: "#FFD635"
			}), a.a.createElement("path", {
				d: "M27.45 4.01l26.28-.2-17.57 22.22h17.92L20.45 62.6l9.68-23.1-18.12-.01L27.45 4z",
				fill: "#fff"
			}), a.a.createElement("path", {
				d: "M36.12 35.25H18.1l11.74-27 15.34-.13-17.53 22.16h16.28L30.39 48.03l5.73-12.78z",
				fill: "#fff"
			}), a.a.createElement("path", {
				d: "M51.17 26.03H33.62l20-3.03-2.45 3.03zM26.44 48.32l4.34-10.37-7.98 10.14 3.64.23z",
				fill: "#000"
			}))
		},
		"./src/reddit/icons/svgs/PowerupTier2/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react/index.js"),
				a = s.n(n);
			t.a = e => a.a.createElement("svg", {
				className: e.className,
				viewBox: "0 0 74 74",
				fill: "none",
				xmlns: "http://www.w3.org/2000/svg",
				onClick: e.onClick,
				onMouseEnter: e.onMouseEnter,
				onMouseLeave: e.onMouseLeave,
				id: e.id,
				"data-testid": "bolt-tier2"
			}, e.title && a.a.createElement("title", null, e.title), a.a.createElement("path", {
				d: "M28.03 73.65h-.08a3.47 3.47 0 01-2.48-1.15l-6.93-7.59a3.47 3.47 0 01-.69-3.63l4.5-10.73H19.6a3.47 3.47 0 01-2.56-1.15L10.1 41.8a3.47 3.47 0 01-.67-3.65L24.86 2.62A3.47 3.47 0 0128.02.54l29.8-.2a3.47 3.47 0 012.55 1.16L67.3 9.1a3.47 3.47 0 01.16 4.5l-7.5 9.54c.27.16.51.36.72.6l6.94 7.58a3.47 3.47 0 01-.12 4.82L30.47 72.66c-.65.64-1.53 1-2.44 1zM25.1 61.9l3.06 3.31L60.3 33.53l-3.64-4.03h-3.47a3.47 3.47 0 01-2.72-5.62l9.75-12.32-3.93-4.28-25.96.17L16.7 38.8l4.4 4.8h6.45a3.47 3.47 0 013.2 4.81L25.1 61.9z",
				fill: "#000"
			}), a.a.createElement("path", {
				d: "M34.1 11.6l22.76-7.78 6.99 7.58-17.58 22.21 10.94-7.58 6.98 7.58L27.1 70.18l-6.98-7.58L28.77 47l-10.1.06-7-7.58 22.43-27.9z",
				fill: "#FF7A00"
			}), a.a.createElement("path", {
				d: "M27.11 4.01l29.75-.2L39.3 26.04H57.2L20.11 62.6l9.69-23.1-18.12-.01L27.1 4z",
				fill: "#FFD15C"
			}), a.a.createElement("path", {
				d: "M35.79 35.25H17.77l11.74-27 18.8-.13-17.53 22.16h16.28l-17 17.75 5.73-12.78z",
				fill: "#FFF5C7"
			}), a.a.createElement("path", {
				d: "M54.32 26.03H36.77l20-3.03-2.45 3.03zM26.1 48.32l4.34-10.37-7.97 10.14 3.64.23z",
				fill: "#000"
			}))
		},
		"./src/reddit/icons/svgs/PowerupTier3/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react/index.js"),
				a = s.n(n);
			t.a = e => a.a.createElement("svg", {
				className: e.className,
				viewBox: "0 0 74 74",
				fill: "none",
				xmlns: "http://www.w3.org/2000/svg",
				onClick: e.onClick,
				onMouseEnter: e.onMouseEnter,
				onMouseLeave: e.onMouseLeave,
				id: e.id
			}, e.title && a.a.createElement("title", null, e.title), a.a.createElement("path", {
				d: "M27.75 73.66a3.4 3.4 0 01-1.78-.5l-8.53-5.14a3.47 3.47 0 01-1.16-4.7l3.56-6.18h-.1l-8.54-5.18a3.47 3.47 0 01-1.15-4.8l5.78-9.32-7.74-4.68a3.47 3.47 0 01-1.3-4.57L20.15 2.8A3.47 3.47 0 0123.23.94h34.12c.8 0 1.58.27 2.2.78L67.4 8.1a3.47 3.47 0 01.25 5.15L57.52 23.3l5.29 4.5a3.47 3.47 0 010 5.26l-11.15 9.72 4.29 3.66a3.47 3.47 0 010 5.33L29.98 72.84c-.62.53-1.41.82-2.23.82zm-3.82-9.82l3.47 2.12 20.81-16.95-4.18-3.56a3.47 3.47 0 01-1.16-2.67 3.47 3.47 0 011.16-2.63l11.17-9.7-3.33-2.84h-.17a3.47 3.47 0 01-2.44-5.92L60 11.03 56.1 7.86H25.33L14.41 28.91l4.94 2.98h2.1a3.47 3.47 0 012.83 5.33l-6.54 10.6 4.7 2.84h3.11a3.47 3.47 0 013 5.2l-4.62 7.98z",
				fill: "#000"
			}), a.a.createElement("path", {
				d: "M30.6 9.53l26.28-5.14 7.16 6.43-18.67 18.54 6.65-5.17 7.38 6.3-14.21 12.33 7.36 6.25L26.63 70.2l-8.52-5.15 11.73-10.91-9.48-.02L11.84 49l19.92-13.33-14.57-.32-8.52-5.15L30.6 9.53z",
				fill: "#FF4500"
			}), a.a.createElement("path", {
				d: "M30.6 9.53l26.28-5.14 7.16 6.43L53.11 21.7l-1.09 2.5 7.38 6.3-14.21 12.33 7.36 6.25L26.63 70.2l-8.52-5.15 11.73-10.91-9.48-.02L11.84 49l19.92-13.33-14.57-.32-8.52-5.15L30.6 9.53z",
				fill: "#D01427"
			}), a.a.createElement("path", {
				d: "M22.07 4.4h34.8L36.86 24.21l15.17-.03-20.4 18.6h13.55L18.11 65.04 27.36 49 11.84 49l11.4-18.47-14.57-.33 13.4-25.8z",
				fill: "#FF4500"
			}), a.a.createElement("path", {
				d: "M49.56 7.39l-25.65-.1L13.46 27.4l15 .34-11.87 18.88h15.33l-4.22 7.24 10.53-8.74H24.6L44.4 27.09l-14.72.04L49.56 7.39z",
				fill: "#FF8717"
			}), a.a.createElement("path", {
				d: "M30.62 30.06h6.08L22.82 42.71l7.8-12.65zM18.3 24.64l7.5-14.45 16.55.07-14.7 14.59-9.35-.21z",
				fill: "#FFD635"
			}), a.a.createElement("path", {
				d: "M53.18 24.19l-17.55.03 19.7-2.88-2.15 2.85zM47.48 42.82l-17.42-.04 20-3-2.58 3.04zM20.6 54.78l7.01-6.22-4.52 7.84-2.49-1.62zM16.46 36.11l7.1-6.1-4.8 7.75-2.3-1.65z",
				fill: "#000"
			}))
		}
	}
]);
//# sourceMappingURL=https://www.redditstatic.com/desktop2x/EconPowerupsPurchaseModal.1d52b9dd0b4d71b44ce7.js.map